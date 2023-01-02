window.onload = function() {
  const container = document.querySelector('#container');

  // Retrieve current data from local storage
  let one = JSON.parse(localStorage.getItem('one')) || [];

  // Create a table to display the data
  const table = document.createElement('table');

  // Create a row for each item in the array
  one.forEach((item, i) => {
    const tr = document.createElement('tr');

    // Create a cell for the item
    const td = document.createElement('td');
    tr.appendChild(td);

    // Create a form for the item
    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Update the item's name and link
      one[i].name = event.target[0].value;
      one[i].link = event.target[1].value;

      // Update local storage
      localStorage.setItem('one', JSON.stringify(one));
    });

    // Create input fields for the item
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'name';
    inputName.value = one[i].name;
    form.appendChild(inputName);
    const inputLink = document.createElement('input');
    inputLink.type = 'text';
    inputLink.name = 'link';
    inputLink.value = one[i].link;
    form.appendChild(inputLink);
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
    form.appendChild(button);
    td.appendChild(form);

    // Create a button to delete the item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      one.splice(i, 1);
      localStorage.setItem('one', JSON.stringify(one));
      window.location.reload();
    });
    td.appendChild(deleteButton);

    table.appendChild(tr);
  });
    // Create a form to add a new item
    const addForm = document.createElement('form');
    addForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Add a new item to the array
      one.push({
        name: event.target[0].value,
        link: event.target[1].value
      });
  
      // Update local storage
      localStorage.setItem('one', JSON.stringify(one));
      window.location.reload();
    });
  
    // Create input fields for the new item
    const addInputName = document.createElement('input');
    addInputName.type = 'text';
    addInputName.name = 'name';
    addInputName.placeholder = 'Name';
    addForm.appendChild(addInputName);
    const addInputLink = document.createElement('input');
    addInputLink.type = 'text';
    addInputLink.name = 'link';
    addInputLink.placeholder = 'Link';
    addForm.appendChild(addInputLink);
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'Add';
    addForm.appendChild(addButton);
  
    container.appendChild(table);
    container.appendChild(addForm);
  };
  
