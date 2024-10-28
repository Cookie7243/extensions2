let is24Hour = false; // Default is 12-hour format

document.getElementById('toggleBtn').addEventListener('click', () => {
    is24Hour = !is24Hour; // Toggle the time format
    updateDateTime(); // Update the time format

    // Update the button text
    document.getElementById('toggleBtn').textContent = is24Hour ? '12H' : '24H';
});

function updateDateTime() {
    const dayElement = document.getElementById("day");
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    const shortDate = `${day}/${month}/${year}`;

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    let period = "";

    if (!is24Hour) { // If it's in 12-hour format
        period = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12 || 12).toString().padStart(2, "0"); // 12-hour format
    } else {
        hours = hours.toString().padStart(2, "0"); // 24-hour format
        period = ""; // No AM/PM for 24-hour format
    }

    const currentTime = `${hours}:${minutes} ${period}`;
    dayElement.innerHTML = dayName;
    dateElement.innerHTML = shortDate;
    timeElement.innerHTML = currentTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();
