const conn = sqlite3.connect('new_tab.db');
const titles = conn.execute('SELECT name FROM titles');
const colOne = conn.execute('SELECT * FROM one');
const colTwo = conn.execute('SELECT * FROM two');
const colThree = conn.execute('SELECT * FROM three');

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
  const div = document.createElement('div');
  div.className = title;

  const h1 = document.createElement('h1');
  h1.textContent = title;
  div.appendChild(h1);

  // Append the div to the appropriate element in the DOM
  document.querySelector('.list').appendChild(div);
}

for (let i = 0; i < colOne.length; i++) {
  const row = colOne[i];
  const name = row.name;
  const link = row.link;

  const a = document.createElement('a');
  a.textContent = name;
  a.href = link;
  a.id = name;

  // Append the a element to the div with class 'media'
  document.querySelector('.media').appendChild(a);
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