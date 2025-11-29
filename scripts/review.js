const year = document.querySelector("#currentyear");

const lastModified = document.getElementById("lastModified")

// recording the current time and date dynamically
const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;
lastModified.innerHTML = ` Last Modification: ${ document.lastModified}`;



// counting number of visit to page
const visitDisplay = document.getElementById("visit-count");

let numVisits = Number(window.localStorage.getItem("count"));

if (numVisits !== 0) {
  visitDisplay.textContent = `You have visited this page ${numVisits} times.`; 
} 

else {
  visitDisplay.textContent = `This is your first visit!`; 
}

numVisits++;
window.localStorage.setItem("count", numVisits);



