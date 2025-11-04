// In JavaScript, when you select an HTML element using a variable, like this:

// const mainnav = document.querySelector('#mainnav');

// The mainnav variable itself is a constant reference to the HTML element. You can't reassign the variable to point to a different element.

const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;