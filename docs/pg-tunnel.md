# Secure PostgreSQL access via SSH tunnel (EC2)

Gives local PGAdmin access to the production PostgreSQL container **without** exposing any port to the internet.

## How it works

```
PGAdmin (local)
  └─ localhost:5433
       └─ SSH tunnel → EC2 localhost:15432
                            └─ socat container (sendit-network)
                                 └─ sendit-db:5432
```

- `sendit-db` has **no `ports:` in docker-compose.yml** — never reachable from outside.
- `socat` binds only to `127.0.0.1:15432` on the EC2 host — not to `0.0.0.0`.
- The SSH tunnel forwards `local:5433 → EC2 127.0.0.1:15432`.
- No Security Group rule for port 5432 is required.

---

## Prerequisites

- EC2 has Docker installed and `docker compose up` is running.
- You have SSH key access to the EC2 instance.
- `alpine/socat` image is pulled automatically on first run (requires internet access from EC2).

---

## Step 1 — Start the forwarding container on EC2

SSH into EC2 and run:

```bash
# From the project root (where docker-compose.yml lives)
bash scripts/pg-tunnel.sh start
```

The script auto-detects the Docker network by inspecting the `sendit-db` container.

**Other commands:**

```bash
bash scripts/pg-tunnel.sh status   # verify port is on 127.0.0.1, not 0.0.0.0
bash scripts/pg-tunnel.sh logs     # debug socat output
bash scripts/pg-tunnel.sh stop     # tear down forwarding container
```

> The container starts with `--restart unless-stopped`, so it survives EC2 reboots
> as long as Docker itself starts on boot.

---

## Step 2 — Open the SSH tunnel from your local machine

```bash
ssh -i ~/.ssh/your-key.pem \
    -L 5433:localhost:15432 \
    ubuntu@<EC2_PUBLIC_IP> \
    -N
```

Keep this terminal open while you need the connection.
To run it in the background, add `-f` before `-N`.

---

## Step 3 — Connect PGAdmin

| Field    | Value                        |
| -------- | ---------------------------- |
| Host     | `localhost`                  |
| Port     | `5433`                       |
| Database | value of `POSTGRES_DB`       |
| Username | value of `POSTGRES_USER`     |
| Password | value of `POSTGRES_PASSWORD` |

Credentials are in `.env` on EC2 (never committed to git).

---

## Security verification

Run on EC2 after `start`:

```bash
# Must show 127.0.0.1:15432 — NOT 0.0.0.0:15432
ss -tlnp | grep 15432
```

Expected output:

```
LISTEN  0  128  127.0.0.1:15432  0.0.0.0:*  users:(("docker-proxy",...))
```

---

## Stopping the tunnel

**Local:** `Ctrl+C` in the SSH tunnel terminal (or `kill` the backgrounded process).

**EC2 forwarding container:**

```bash
bash scripts/pg-tunnel.sh stop
# or directly:
docker rm -f pg-tunnel
```

---

## Troubleshooting

| Symptom                                     | Check                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Cannot detect Docker network`              | Run `docker compose up` first; confirm `sendit-db` container is running             |
| `Connection refused` on local port 5433     | Verify SSH tunnel is open; check `pg-tunnel.sh status` on EC2                       |
| `socat` DNS error for `db`                  | Confirm `pg-tunnel` container is on the same network: `docker inspect pg-tunnel`    |
| Port shows `0.0.0.0` instead of `127.0.0.1` | Stop and re-run `pg-tunnel.sh start` — old container may have been started manually |
