import { fromUnixTime, format } from 'date-fns';

const FORMATDEFAULT = 'dd/MM/yyyy';

export const dbToDate = (date: number, FORMAT = FORMATDEFAULT) => {
  if (!date) {
    return null;
  }

  const newDate = fromUnixTime(date);
  return format(newDate, FORMAT);
};
