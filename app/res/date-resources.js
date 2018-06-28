const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const daysOfWeekShort = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dateAttrs = {
    year: 2018,
    month: 5, //month index, so this represents June
    day: 12,
    hours: 10,
    minutes: 30,
}
const currentDate = new Date(...Object.values(dateAttrs));

export {
    daysOfWeek,
    daysOfWeekShort,
    months,
    currentDate,
}