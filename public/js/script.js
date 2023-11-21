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

        // Additional elements for the gift box design
        var ribbon = document.createElement('div');
        ribbon.className = 'ribbon';
        gridItem.appendChild(ribbon);

        var bow = document.createElement('div');
        bow.className = 'bow';
        gridItem.appendChild(bow);

        var lid = document.createElement('div');
        lid.className = 'lid';
        gridItem.appendChild(lid);

        // Check if the item can be opened based on the day in December
        if (i <= currentDayInDecember) {
            gridItem.classList.add('openable');
            ribbon.classList.add('openable-rib');
            bow.classList.add('openable-rib');
            lid.classList.add('openable-lid');
            gridItem.addEventListener('click', function() {
                // Add your custom logic for handling opened items
                var itemNumber = this.textContent;
                window.location.href = './december/' + itemNumber + '/content.html'; // Redirect to a new page with the item number as a parameter
            });
        } else {
            gridItem.classList.add('unopenable');
            ribbon.classList.add('unopenable-rib');
            bow.classList.add('unopenable-rib');
            lid.classList.add('unopenable-lid');
        }

        gridContainer.appendChild(gridItem);
    }
});
