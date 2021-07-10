let a;
let date;
let time;
const options1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const options2 = {hour: '2-digit', minute: '2-digit' , second: '2-digit'};
setInterval(() => {
    a = new Date();
    // time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    time = a.toLocaleTimeString("en-us", options2);
    date = a.toLocaleDateString(undefined, options1);
    document.getElementById('time').innerHTML = "Current Time is: " + time + "<br>On " + date + "<br><br>";
}, 1000);