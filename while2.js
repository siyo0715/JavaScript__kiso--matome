// 西暦
const thisYear = 2021;
// JavaScriptでは1月が0になるので+1してあげる必要がある
let day = new Date(thisYear, 0, 1);
const week = ['日','月','火','水','木','金','土']

while (day.getFullYear() === thisYear) {
    document.write(day.getFullYear());
    document.write('/');
    document.write(day.getMonth() + 1);
    document.write('/')
    document.write(day.getDate());
    document.write('(' + week[day.getDay()] + ')');
    document.write('<br>')
// +1日
    day.setDate(day.getDate() + 1);
}
