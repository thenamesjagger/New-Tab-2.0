window.onload = function() {

  if (!localStorage.getItem('titles')) {
    localStorage.setItem('titles', JSON.stringify([{id: 1, name: 'media'}, {id: 2, name: 'school'}, {id: 3, name: 'personal'}]));
  }
  if (!localStorage.getItem('one')) {
    localStorage.setItem('one', JSON.stringify([{id: 1, name: 'youtube', link: 'youtube.com'}, {id: 2, name: 'twitch', link: 'twitch.tv'}, {id: 3, name: 'spotify', link: 'spotify.com'}]));
  }
  if (!localStorage.getItem('two')) {
    localStorage.setItem('two', JSON.stringify([{id: 1, name: 'youtube', link: 'youtube.com'}, {id: 2, name: 'twitch', link: 'twitch.tv'}, {id: 3, name: 'spotify', link: 'spotify.com'}]));
  }
  if (!localStorage.getItem('three')) {
    localStorage.setItem('three', JSON.stringify([{id: 1, name: 'youtube', link: 'youtube.com'}, {id: 2, name: 'twitch', link: 'twitch.tv'}, {id: 3, name: 'spotify', link: 'spotify.com'}]));
  }

  // Retrieve data from local storage
  const titles = JSON.parse(localStorage.getItem('titles'));
  const titlesArray = Object.values(titles);

  const one = JSON.parse(localStorage.getItem('one'));
  const colOne = Object.values(titles);

  const two = JSON.parse(localStorage.getItem('two'));
  const colTwo = Object.values(titles);

  const three = JSON.parse(localStorage.getItem('three'));
  const colThree = Object.values(titles);

  for (let i = 0; i < titlesArray.length; i++) {
    const title = titlesArray[i];
    const div = document.createElement('div');
    div.className = title.name;

    const h1 = document.createElement('h1');
    h1.textContent = title.name;
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

  for (let i = 0; i < colTwo.length; i++) {
    const row = colTwo[i];
    const name = row.name;
    const link = row.link;

    const a = document.createElement('a');
    a.textContent = name;
    a.href = link;
    a.id = name;

    // Append the a element to the div with class 'media'
    document.querySelector('.media').appendChild(a);
  }

  for (let i = 0; i < colThree.length; i++) {
    const row = colThree[i];
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
}