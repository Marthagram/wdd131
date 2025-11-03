
// Get the elements
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const list = document.querySelector('ul');
    const listItem = document.createElement('li');

//Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
    
  // Check if the input field is not empty
  if (input.value.trim() !== '') {

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // Add the list item to the list
    list.appendChild(listItem);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {

        list.removeChild(listItem);
        input.focus();
    });

    // // Add delete button to the list item
    // listItem.appendChild(deleteButton);

    

    // Clean up the interface
    input.value = '';

    // Focus on the input field
    input.focus();
  } else {
    // If the input field is empty, focus on it
    input.focus();
  }
});