window.onload = function() {

    const container = document.querySelector('#container');

    // Retrieve current data from local storage
    const one = JSON.parse(localStorage.getItem('one'));
    const two = JSON.parse(localStorage.getItem('two'));
    const three = JSON.parse(localStorage.getItem('three'));


    // Create a table to display the data
    const table = document.createElement('table');

    // Create a row for each item in the arrays
    for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr');

    // Create a cell for each item
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);

    // Create a form for each item
    const formOne = document.createElement('form');
    formOne.addEventListener('submit', (event) => {
        event.preventDefault();

        // Update the item's name and link
        one[i].name = event.target[0].value;
        one[i].link = event.target[1].value;

        // Update local storage
        localStorage.setItem('one', JSON.stringify(one));
    });
    const formTwo = document.createElement('form');
    formTwo.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Update the item's name and link
      two[i].name = event.target[0].value;
      two[i].link = event.target[1].value;
  
      // Update local storage
      localStorage.setItem('two', JSON.stringify(two));
    });
    const formThree = document.createElement('form');
    formThree.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Update the item's name and link
      three[i].name = event.target[0].value;
      three[i].link = event.target[1].value;
  
      // Update local storage
      localStorage.setItem('three', JSON.stringify(three));
    });
  
    // Create input fields for each item
    const inputNameOne = document.createElement('input');
    inputNameOne.type = 'text';
    inputNameOne.name = 'name';
    inputNameOne.value = one[i].name;
    formOne.appendChild(inputNameOne);
    const inputLinkOne = document.createElement('input');
    inputLinkOne.type = 'text';
    inputLinkOne.name = 'link';
    inputLinkOne.value = one[i].link;
    formOne.appendChild(inputLinkOne);
    const buttonOne = document.createElement('button');
    buttonOne.type = 'submit';
    buttonOne.textContent = 'Submit';
    formOne.appendChild(buttonOne);
    tdOne.appendChild(formOne);
  
    const inputNameTwo = document.createElement('input');
    inputNameTwo.type = 'text';
    inputNameTwo.name = 'name';
    inputNameTwo.value = two[i].name;
    formTwo.appendChild(inputNameTwo);
    const inputLinkTwo = document.createElement('input');
    inputLinkTwo.type = 'text';
    inputLinkTwo.name = 'link';
    inputLinkTwo.value = two[i].link;
    formTwo.appendChild(inputLinkTwo);
    const buttonTwo = document.createElement('button');
    buttonTwo.type = 'submit';
    buttonTwo.textContent = 'Submit';
    formTwo.appendChild(buttonTwo);
    tdTwo.appendChild(formTwo);
  
    const inputNameThree = document.createElement('input');
    inputNameThree.type = 'text';
    inputNameThree.name = 'name';
    inputNameThree.value = three[i].name;
    formThree.appendChild(inputNameThree);
    const inputLinkThree = document.createElement('input');
    inputLinkThree.type = 'text';
    inputLinkThree.name = 'link';
    inputLinkThree.value = three[i].link;
    formThree.appendChild(inputLinkThree);
    const buttonThree = document.createElement('button');
    buttonThree.type = 'submit';
    buttonThree.textContent = 'Submit';
    formThree.appendChild(buttonThree);
    tdThree.appendChild(formThree);
  
    table.appendChild(tr);
  }
  
  container.appendChild(table);
}