import { getUnixTime } from "date-fns";

export const newDbDate = () => {
  const newDate = new Date();
  return getUnixTime(newDate);
};
