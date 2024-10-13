import moment from 'moment';


// cookie needed to expire to the max use time
// we will log the user if inactive in 1 hr otherwise if dashboard/dataAnalytics page keep for 1 day
const SESSION_EXPIRE_MS = 86400000; // 1 day

const DateUtils = {
  formatDate(format, date) {
    try {
      return moment(date).format(format, date);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
export function getCookieDate() {
  let dateObj = Date.now();
  dateObj += SESSION_EXPIRE_MS;
  dateObj = new Date(dateObj);
  return dateObj;
}
export default DateUtils;
