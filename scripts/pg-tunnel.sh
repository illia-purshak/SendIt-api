#!/usr/bin/env bash
# Manages a socat forwarding container for secure local PostgreSQL access via SSH tunnel.
# Binds only to 127.0.0.1 on EC2 — never exposes the DB port to the public internet.
set -euo pipefail

CONTAINER_NAME="pg-tunnel"
SOCAT_IMAGE="alpine/socat"
DB_CONTAINER="sendit-db"
DB_SERVICE="db"
HOST_BIND="127.0.0.1"
HOST_PORT="15432"
DB_PORT="5432"

# ---------------------------------------------------------------------------

get_network() {
  docker inspect "$DB_CONTAINER" \
    --format '{{range $k, $v := .NetworkSettings.Networks}}{{$k}} {{end}}' 2>/dev/null \
    | awk '{print $1}'
}

is_running() {
  docker ps --filter "name=^${CONTAINER_NAME}$" --format "{{.Names}}" \
    | grep -q "^${CONTAINER_NAME}$"
}

exists() {
  docker ps -a --filter "name=^${CONTAINER_NAME}$" --format "{{.Names}}" \
    | grep -q "^${CONTAINER_NAME}$"
}

# ---------------------------------------------------------------------------

cmd_start() {
  if is_running; then
    echo "[pg-tunnel] Already running."
    docker ps --filter "name=^${CONTAINER_NAME}$" \
      --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    return 0
  fi

  if exists; then
    echo "[pg-tunnel] Stopped container found — removing before restart."
    docker rm "$CONTAINER_NAME" > /dev/null
  fi

  local network
  network=$(get_network)

  if [[ -z "$network" ]]; then
    echo "[pg-tunnel] ERROR: Cannot detect Docker network for '$DB_CONTAINER'." >&2
    echo "            Make sure 'docker compose up' is running first." >&2
    exit 1
  fi

  echo "[pg-tunnel] Starting on network: $network"
  docker run -d \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    -p "${HOST_BIND}:${HOST_PORT}:${DB_PORT}" \
    --network "$network" \
    "$SOCAT_IMAGE" \
    tcp-listen:${DB_PORT},fork,reuseaddr \
    tcp-connect:${DB_SERVICE}:${DB_PORT}

  echo ""
  echo "[pg-tunnel] Ready. Port ${HOST_BIND}:${HOST_PORT} → ${DB_SERVICE}:${DB_PORT}"
  echo ""
  echo "  Run on your local machine:"
  echo "    ssh -i path/to/key.pem -L 5433:localhost:${HOST_PORT} ubuntu@<EC2_IP> -N"
  echo ""
  echo "  Then connect PGAdmin to: localhost:5433"
}

cmd_stop() {
  if exists; then
    docker rm -f "$CONTAINER_NAME"
    echo "[pg-tunnel] Stopped and removed."
  else
    echo "[pg-tunnel] Not running."
  fi
}

cmd_status() {
  echo "=== Container ==="
  docker ps -a --filter "name=^${CONTAINER_NAME}$" \
    --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" || true

  echo ""
  echo "=== Port binding (must show 127.0.0.1, not 0.0.0.0) ==="
  ss -tlnp 2>/dev/null | grep "${HOST_PORT}" \
    || echo "  (port ${HOST_PORT} not in use)"
}

cmd_logs() {
  docker logs --tail 50 -f "$CONTAINER_NAME"
}

# ---------------------------------------------------------------------------

case "${1:-}" in
  start)  cmd_start ;;
  stop)   cmd_stop ;;
  status) cmd_status ;;
  logs)   cmd_logs ;;
  *)
    echo "Usage: $0 {start|stop|status|logs}"
    echo ""
    echo "  start   — launch socat forwarding container"
    echo "  stop    — remove forwarding container"
    echo "  status  — show container state and port binding"
    echo "  logs    — tail container logs"
    exit 1
    ;;
esac
