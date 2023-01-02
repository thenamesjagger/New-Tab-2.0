window.onload = function() {

  const container = document.querySelector('#container');

  // Retrieve current data from local storage
  let one = JSON.parse(localStorage.getItem('one'));
  let two = JSON.parse(localStorage.getItem('two'));
  let three = JSON.parse(localStorage.getItem('three'));

  // Create a table to display the data
  const table = document.createElement('table');

  // Create a row for each item in the arrays
  one.forEach((item, i) => {
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
    
    // Create a dropdown menu for each item
    const select = document.createElement('select');
    const optionOne = document.createElement('option');
    optionOne.value = 'one';
    optionOne.textContent = 'Array One';
    const optionTwo = document.createElement('option');
    optionTwo.value = 'two';
    optionTwo.textContent = 'Array Two';
    const optionThree = document.createElement('option');
    optionThree.value = 'three';
    optionThree.textContent = 'Array Three';
    select.appendChild(optionOne);
    select.appendChild(optionTwo);
    select.appendChild(optionThree);

    // Create a delete button for each item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Remove the item from the selected array
      if (select.value === 'one') {
        one.splice(i, 1);
        localStorage.setItem('one', JSON.stringify(one));
      } else if (select.value === 'two') {
        two.splice(i, 1);
        localStorage.setItem('two', JSON.stringify(two));
      } else if (select.value === 'three') {
        three.splice(i, 1);
        localStorage.setItem('three', JSON.stringify(three));
      }

      // Remove the row from the table
      tr.remove();
    });
    tr.appendChild(select);
    tr.appendChild(deleteButton);

    // Add the row to the table
    table.appendChild(tr);
    });

    // Add the table to the container
    container.appendChild(table);

    // Add form to add a new item to a specific array
    const addForm = document.createElement('form');
    addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get the values from the form
      const name = event.target[0].value;
      const link = event.target[1].value;
      const array = event.target[2].value;

      // Add the item to the selected array
      if (array === 'one') {
        one.push({ name, link });
        localStorage.setItem('one', JSON.stringify(one));
      } else if (array === 'two') {
        two.push({ name, link });
        localStorage.setItem('two', JSON.stringify(two));
      } else if (array === 'three') {
        three.push({ name, link });
        localStorage.setItem('three', JSON.stringify(three));
      }

      // Add a new row to the table
      const tr = document.createElement('tr');
      const tdOne = document.createElement('td');
      const tdTwo = document.createElement('td');
      const tdThree = document.createElement('td');
      tr.appendChild(tdOne);
      tr.appendChild(tdTwo);
      tr.appendChild(tdThree);
      table.appendChild(tr);
    });

    // Add input fields to the form
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'name';
    inputName.placeholder = 'Name';
    addForm.appendChild(inputName);
    const inputLink = document.createElement('input');
    inputLink.type = 'text';
    inputLink.name = 'link';
    inputLink.placeholder = 'Link';
    addForm.appendChild(inputLink);

    // Add a dropdown menu to select the array
    const addSelect = document.createElement('select');
    const addOptionOne = document.createElement('option');
    addOptionOne.value = 'one';
    addOptionOne.textContent = 'Array One';
    const addOptionTwo = document.createElement('option');
    addOptionTwo.value = 'two';
    addOptionTwo.textContent = 'Array Two';
    const addOptionThree = document.createElement('option');
    addOptionThree.value = 'three';
    addOptionThree.textContent = 'Array Three';
    addSelect.appendChild(addOptionOne);
    addSelect.appendChild(addOptionTwo);
    addSelect.appendChild(addOptionThree);
    addForm.appendChild(addSelect);

    // Add a submit button to the form
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'Add';
    addForm.appendChild(addButton);

    // Add the form to the container
    container.appendChild(addForm);
    };
