const year = document.querySelector("#currentyear");
const navigation = document.querySelector("ul");
const menuButton = document.querySelector("#menu");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
});

const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;

document.getElementById("lastModified").innerHTML = ` Last Modification: ${ document.lastModified}`;

