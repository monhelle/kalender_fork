document.addEventListener('DOMContentLoaded', function() {
    const LASTCALENDARDAY = 24;
    let progressBar = document.getElementById('progress-bar');
    let dateDisplay = document.getElementById('date-display');
    let percentageDisplay = document.getElementById('percentage'); // New line

        // Get the current date
    let currentDate = new Date();

    // Get the current day in December and stop counting after the last day of the calendar
    let currentDayInDecember = currentDate.getDate();
    currentDayInDecember = currentDayInDecember <= LASTCALENDARDAY ? currentDayInDecember : LASTCALENDARDAY;
    // Calculate progress percentage
    let progressPercentage = (currentDayInDecember / LASTCALENDARDAY) * 100;
    progressBar.style.width = progressPercentage + '%';
    // Display the date
    dateDisplay.textContent = currentDate.toDateString();

    // Update the progress percentage in the HTML
    percentageDisplay.textContent = progressPercentage.toFixed(2); // Update the displayed percentage
});