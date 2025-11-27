const year = document.querySelector("#currentyear");

const lastModified = document.getElementById("lastModified")


const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;
lastModified.innerHTML = ` Last Modification: ${ document.lastModified}`;



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

//  Populate the Product Name options where the array's name field is used for the select option display and the array's id is used for the value field.

const select = document.getElementById("select-product")

products.forEach((product) => {
    
    select.innerHTML += `
                    <option value="${product.id}">${product.name}</option>`
});

// adding an event listener method to the select element can also work:

// select.addEventListener(click, ()=>{  })   

const visitDisplay = document.querySelector("#visit-count");

let numVisits = Number(window.localStorage.getItem("visit-count"));

if (numVisits === null) {
  visitDisplay.textContent = `This is your first visit!`;
  numVisits = 0;
} else {
  visitDisplay.textContent = `You have visited this page ${numVisits} times.`;
  numVisits = Number(numVisits);
}
numVisits++;
window.localStorage.setItem("visit-count", numVisits);

document.querySelector(".web-form").addEventListener('submit', (e) => {
  e.preventDefault();
  // you can add any necessary validation or processing here
  // ...
  // then submit the form

  window.location.href = "review.html";

});
