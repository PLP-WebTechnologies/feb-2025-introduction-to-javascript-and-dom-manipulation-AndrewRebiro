// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
  const textElement = document.getElementById('dynamic-text');
  textElement.textContent = "The text has been changed dynamically!";
});

// Toggle CSS styles dynamically
document.getElementById('toggle-style-btn').addEventListener('click', () => {
  const textElement = document.getElementById('dynamic-text');
  if (textElement.style.color === 'red') {
    textElement.style.color = 'blue';
    textElement.style.fontWeight = 'normal';
  } else {
    textElement.style.color = 'red';
    textElement.style.fontWeight = 'bold';
  }
});

// Add an element dynamically
document.getElementById('add-element-btn').addEventListener('click', () => {
  const container = document.getElementById('container');
  if (!document.getElementById('added-element')) {
    const newElement = document.createElement('p');
    newElement.id = 'added-element';
    newElement.textContent = "I am a new element added to the page!";
    container.appendChild(newElement);
  }
});

// Remove the added element
document.getElementById('remove-element-btn').addEventListener('click', () => {
  const addedElement = document.getElementById('added-element');
  if (addedElement) {
    addedElement.remove();
  }
});
