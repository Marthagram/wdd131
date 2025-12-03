const today = new Date();
const date = document.querySelector(".date");
date.innerHTML = `Today's date is ${document.lastModified}`;

const countdown = document.querySelector("#countdown");
const navigation = document.querySelector("ul");
const menuButton = document.querySelector("#menu");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuButton.classList.toggle("show");
});

const tables = [
    {
        gatheringplace : "madallah",
        meetingday:"friday",
        time:"10am - 11am"
    },

     {
        gatheringplace : "suleija",
        meetingday:"thursday",
        time:"11am - 12am"

    },

     {
        gatheringplace : "Dikko",
        meetingday:"saturday",
        time:"9am - 10am"
    }
]


tables.forEach((table) => {

    const data = document.querySelector("table");
    data.innerHTML +=`

                <tbody>
                    <tr>
                        <td>${table.gatheringplace}</td>
                        <td>${table.meetingday}</td>
                        <td>${table.time}</td>
                    </tr>
                   
                    
                </tbody>`
    }

)

const result = document.querySelector("#result");
const weeksInput =  document.querySelector("#weeks");

const eventDate = new Date("jan 9, 2026 9:00:00").getTime();
const currentDate = today.getTime();
const diff = eventDate - currentDate;
const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

const button = document.querySelector("button");
button.addEventListener("click", () => {
    if (weeksInput.value === "") {
        result.innerHTML = "Please enter your guess to proceed";
        setTimeout(() => {
        result.innerHTML = "";
        weeksInput.value = "";
        }, 5000); // Clear result after 5 seconds

        
    }
    else if (weeksInput.value > weeks) {
        result.innerHTML = `Too high! There are only ${weeks} weeks remaining until the government general-approved agricultural implement giving-day.`
        setTimeout(() => {
        result.innerHTML = "";
        weeksInput.value = "";
        }, 5000); // Clear result after 5 seconds

    }
    else if (weeksInput.value < weeks) {
        result.innerHTML = `Too low! There are ${weeks} weeks remaining until the government general-approved agricultural implement giving-day.`
        setTimeout(() => {
        result.innerHTML = "";
        weeksInput.value = "";
        }, 5000); // Clear result after 5 seconds
    }
    else{
        result.innerHTML = `Congratulations! Your guess is correct. There are ${weeks} weeks remaining until the government general-approved agricultural implement giving-day.`
    
        setTimeout(() => {
        result.innerHTML = "";
        weeksInput.value = "";
        }, 5000); // Clear result after 5 seconds
    }


    
});







// footer
const year = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
year.innerHTML = `&copy ${today.getFullYear()}  🌼 Martha Itohan Otasowie 🌼 Nigeria`;
lastModified.innerHTML = ` Last Modification: ${ document.lastModified}`;