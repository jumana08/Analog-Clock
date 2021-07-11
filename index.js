let a;
let date;
let time;
let day;
let seconds;
const options1 = {year: 'numeric', month: 'long', day: 'numeric' };
const options2 = {hour: '2-digit', minute: '2-digit' , hour12: false};
const options4 = {second: '2-digit' , hour12: false};
const option3 = {weekday: 'long'};
setInterval(() => {
    a = new Date();

    time = a.toLocaleTimeString("en-us", options2);
    date = a.toLocaleDateString(undefined, options1);
    day=a.toLocaleDateString(undefined,option3);
    seconds=a.toLocaleTimeString(undefined,options4);

    document.getElementById('time').innerHTML = time;
    document.getElementById('day').innerHTML = day;
    document.getElementById('date').innerHTML = date;
    document.getElementById('seconds').innerHTML = ":" + seconds;
    
}, 1000);