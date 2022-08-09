import dayjs from 'dayjs';

export const formatDate = (date: string | number, format?: string) => {
  return dayjs(date).format(format || 'MMMM DD, YYYY');
};
