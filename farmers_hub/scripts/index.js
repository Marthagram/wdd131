const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;

document.getElementById("lastModified").innerHTML = ` Last Modification: ${ document.lastModified}`;
const navigation = document.querySelector("ul");
const menuButton = document.querySelector("#menu");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
});


// counting number of visit to page
const visitDisplay = document.getElementById("visit-count");

let numVisits = Number(window.localStorage.getItem("count"));

if (numVisits !== 0) {
  visitDisplay.textContent = `😀You have visited this page ${numVisits} times.`; 
} 

else {
  visitDisplay.textContent = `😀This is your first visit!`; 
}

numVisits++;
window.localStorage.setItem("count", numVisits);

