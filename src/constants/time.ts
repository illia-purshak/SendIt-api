export const DAY = 1000 * 60 * 60 * 24;
export const WEEK = DAY * 7;
export const MOUNTH = DAY * 30;

export const setDeadlineFromNow = (dealine: number) =>
  new Date(Date.now() + dealine);
