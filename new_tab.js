const ejs = require('ejs');

async function newTab() {
  const conn = await sqlite3.connect('new_tab.db');
  const titles = await conn.execute('SELECT * FROM titles');
  const colOne = await conn.execute('SELECT * FROM one');
  const colTwo = await conn.execute('SELECT * FROM two');
  const colThree = await conn.execute('SELECT * FROM three');

  const data = {
    media: colOne,
    school: colTwo,
    personal: colThree,
  };

  const html = await ejs.renderFile('new_tab.ejs', { titles, data });
  return html;
}

// sets username for greeting message
var username = "Jagger";

// constant to set the greeting message based on the time of the day, refrence https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}.`;

// web api to load time based on browser time, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    determineGreet(new Date().getHours());
    displayTime(time);
});

// sets time above the greeting message
setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

// function to display time
function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}