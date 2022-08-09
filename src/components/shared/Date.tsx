import { formatDate } from '@utils/dayjs';

export const Date = ({ dateString }) => <time dateTime={dateString}>{formatDate(dateString)}</time>;
