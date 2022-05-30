const dateDisplay = document.getElementById('dateDisplay');


const myDate = new Date();
const myDateFormatted = formatDate(myDate);
// dateDisplay.innerHTML = myDate.toDateString();
dateDisplay.innerHTML = myDateFormatted;


function formatDate(dateObject) {
    // console.log("Format Date Function:");
    const parts = {
        month: (dateObject.getMonth() + 1),
        date: dateObject.getDate(),
        year: dateObject.getFullYear(),
        hour: (dateObject.getHours() % 12) || 12,
        minute: dateObject.getMinutes(),
        amPm: dateObject.getHours() < 12 ? "am" : "pm"
    }
    // console.log("parts: ", parts);
    return `
         ${parts.month} / ${parts.date} / ${parts.year}, 
         ${parts.hour}:${parts.minute} ${parts.amPm}
    `;
}


console.log("myDateFormatted: ", myDateFormatted);