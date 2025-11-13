const year = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified")
const wind = document.querySelector(".windchill-calc");

const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;


lastModified.innerHTML = ` Last Modification: ${ document.lastModified}`;
let T = 10;
let V = 8


function calculateWindChill(T, V){
   return ((13.12 + 0.6215 * T) - 11.37 * (V ** 0.16) + 0.3965 * T*(V ** 0.16)).toFixed(2);
    
}

if (T >= 10 && V > 4.8){
    const result = calculateWindChill(T, V);
    wind.innerHTML = `<span> Windchill: </span> ${result}°C  `;

}

else{
    wind.innerHTML = `<span> Windchill: </span> N/A`
}






// Wind Chill (°C) = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T(V^0.16)


// Wind Chill (°F) = 35.74 + 0.6215T - 35.75V^0.16 + 0.4275T(V^0.16)