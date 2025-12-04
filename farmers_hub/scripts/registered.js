const year = document.querySelector("#currentyear");

const lastModified = document.getElementById("lastModified")

// recording the current time and date dynamically
const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;
lastModified.innerHTML = ` Last Modification: ${ document.lastModified}`;






