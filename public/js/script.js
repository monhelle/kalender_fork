document.addEventListener('DOMContentLoaded', function() {
    var gridContainer = document.getElementById('grid-container');

    // Get the current date
    var currentDate = new Date();

    // Get the current day in December
    var currentDayInDecember = currentDate.getDate();

    for (var i = 1; i <= 24; i++) {
        var gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = i;

        // Check if the item can be opened based on the day in December
        if (i <= currentDayInDecember) {
            gridItem.classList.add('openable');
            gridItem.addEventListener('click', function() {
                // Add your custom logic for handling opened items
                var itemNumber = this.textContent;
                let currentPageIndex = localStorage.getItem('currentPageIndex');
                currentPageIndex = itemNumber
                window.location.href = '/december/' + itemNumber + '/'// Redirect to a new page with the item number as a parameter
            });
        } else {
            gridItem.classList.add('unopenable');
        }

        gridContainer.appendChild(gridItem);
    }
});