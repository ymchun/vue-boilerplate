import { format } from 'date-fns'

export default function dateTime(
  dateTime: Date | number,
  formatStr = 'yyyy-MM-dd HH:ii:ss',
): string {
  // convert second to millisecond
  if (typeof dateTime === 'number' && dateTime < 1000000000000) {
    dateTime = dateTime * 1000
  }
  return format(dateTime, formatStr)
}
