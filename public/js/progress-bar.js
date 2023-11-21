document.addEventListener('DOMContentLoaded', function() {
    var gridContainer = document.getElementById('grid-container');
    var progressContainer = document.getElementById('progress-container');
    var progressBar = document.getElementById('progress-bar');
    var dateDisplay = document.getElementById('date-display');
    var percentageDisplay = document.getElementById('percentage'); // New line

    // Get the current date
    var currentDate = new Date();

    // Get the current day in December
    var currentDayInDecember = currentDate.getDate();

    // Calculate progress percentage
    var progressPercentage = (currentDayInDecember / 24) * 100;
    progressBar.style.width = progressPercentage + '%';

    // Display the date
    dateDisplay.textContent = currentDate.toDateString();

    // Update the progress percentage in the HTML
    percentageDisplay.textContent = progressPercentage.toFixed(2); // Update the displayed percentage
});
