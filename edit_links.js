window.onload = function() {
  const container = document.querySelector('#container');

  // Retrieve current data from local storage
  const one = JSON.parse(localStorage.getItem('one'));
  const two = JSON.parse(localStorage.getItem('two'));
  const three = JSON.parse(localStorage.getItem('three'));

  // Create a table to display the data
  const table = document.createElement('table');

  // Create a row for each item in the arrays
  for (let i = 0; i < one.length; i++) {
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

    // Create delete buttons for each item
    const deleteButtonOne = document.createElement('button');
    deleteButtonOne.textContent = 'Delete';
    deleteButtonOne.addEventListener('click', () => {
      // Remove the item from the array
      one.splice(i, 1);

      // Update local storage
      localStorage.setItem('one', JSON.stringify(one));

      // Remove the row from the table
      tr.remove();
    });
    tdOne.appendChild(deleteButtonOne);

    const deleteButtonTwo = document.createElement('button');
    deleteButtonTwo.textContent = 'Delete';
    deleteButtonTwo.addEventListener('click', () => {
      // Remove the item from the array
      two.splice(i, 1);

      // Update local storage
      localStorage.setItem('two', JSON.stringify(two));

      // Remove the row from the table
      tr.remove();
    });
    tdTwo.appendChild(deleteButtonTwo);

    const deleteButtonThree = document.createElement('button');
    deleteButtonThree.textContent = 'Delete';
    deleteButtonThree.addEventListener('click', () => {
      // Remove the item from the array
      three.splice(i, 1);

      // Update local storage
      localStorage.setItem('three', JSON.stringify(three));

      // Remove the row from the table
      tr.remove();
      });
      tdThree.appendChild(deleteButtonThree);

      // Add the row to the table
      table.appendChild(tr);
      }

      // Create a form to add a new item to an array
      const addForm = document.createElement('form');
      addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the selected array and the name and link of the new item
        const array = event.target[0].value;
        const name = event.target[1].value;
        const link = event.target[2].value;

        // Add the new item to the selected array
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

        // Clear the form
        event.target[1].value = '';
        event.target[2].value = '';
      });

      // Create a dropdown to select an array
      const select = document.createElement('select');
      select.name = 'array';
      const optionOne = document.createElement('option');
      optionOne.value = 'one';
      optionOne.textContent = 'Array One';
      select.appendChild(optionOne);
      const optionTwo = document.createElement('option');
      optionTwo.value = 'two';
      optionTwo.textContent = 'Array Two';
      select.appendChild(optionTwo);
      const optionThree = document.createElement('option');
      optionThree.value = 'three';
      optionThree.textContent = 'Array Three';
      select.appendChild(optionThree);
      addForm.appendChild(select);

      // Create input fields for the new item
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
      const button = document.createElement('button');
      button.type = 'submit';
      button.textContent = 'Add';
      addForm.appendChild(button);

      // Add the form to the container
      container.appendChild(addForm);

      // Add the table to the container
      container.appendChild(table);
      };

    
