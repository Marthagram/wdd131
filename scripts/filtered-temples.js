const year = document.querySelector("#currentyear");
const navigation = document.querySelector("ul");
const menuButton = document.querySelector("#menu");
// for clicking menu icon
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
});


// for dynamically setting the current date and time in the footer
const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;

document.getElementById("lastModified").innerHTML = ` Last Modification: ${ document.lastModified}`;

// for creating temples cards in the main
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

 {
    templeName: "Atlanta Georgia Temple",
    location: "Atlanta, Georgia, United States",
    dedicated: "1983, June, 4",
    area: 34500,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3861.jpg"
  },

  {
  templeName: "Johannesburg South Africa Temple",
  location: "Johannesburg, South Africa",
  dedicated: "1985, August, 5",
  area: 19814,
  imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596.jpg"
  },

  {
  templeName: "Jordan River Utah Temple",
  location: "Utah, United States",
  dedicated: "1981, May, 20",
  area: 148236,
  imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-61349.jpg"
  },

  {
  templeName: "Manila Philippines Temple",
  location: "Manila, Philippines",
  dedicated: "1984, September, 27",
  area: 26683,
  imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44346.jpg"
  },

  {
  templeName: "Gilbert Arizona Temple",
  location: "Gilbert, Arizona, United States",
  dedicated: "2014, March, 2",
  area: 85326,
  imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-64742.jpg"
  },


];


  

// Responding to the main navigation menu items by filtering and displaying the temples in categories.



function displayTemples(temples) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "The House of the Lord";
  main.appendChild(h1);
  temples.forEach((temple) => {
    
    const templeDiv = document.createElement("div");
    templeDiv.className = "temple-gallery";
    templeDiv.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
    `;
    main.appendChild(templeDiv);
  });
}

displayTemples(temples);

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newTemple = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
  displayTemples(temples);
});

old.addEventListener("click", () => {
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

newTemple.addEventListener("click", () => {
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

large.addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
});

small.addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});



