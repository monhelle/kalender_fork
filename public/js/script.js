document.addEventListener('DOMContentLoaded', function() {
    var gridContainer = document.getElementById('grid-container');

    // Get the current date
    var currentDate = new Date();

    // Get the current day in December
    var currentDayInDecember = currentDate.getDate();

    for (var i = 1; i <= 24; i++) {
        var gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

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

        // Create a background element
        var background = document.createElement('div');
        background.className = 'background';
        gridItem.appendChild(background);

        // Create the text content element
        var textContent = document.createElement('i');
        textContent.textContent = i;
        textContent.className = 'grid-item-text'; // Add a specific class for styling

        // Append the text content to the grid item
        gridItem.appendChild(textContent);

        // Check if the item can be opened based on the day in December
        if (i <= currentDayInDecember) {
            gridItem.classList.add('openable');
            ribbon.classList.add('openable-rib');
            bow.classList.add('openable-rib');
            lid.classList.add('openable-lid');
            background.classList.add('openable-bg'); // Add a class for openable background styling
            textContent.classList.add('openable-text'); // Add a class for openable text styling
            gridItem.addEventListener('click', function() {
                // Add your custom logic for handling opened items
                var itemNumber = this.querySelector('.grid-item-text').textContent;
                window.location.href = './december/' + itemNumber + '/content.html'; // Redirect to a new page with the item number as a parameter
            });
        } else {
            gridItem.classList.add('unopenable');
            ribbon.classList.add('unopenable-rib');
            bow.classList.add('unopenable-rib');
            lid.classList.add('unopenable-lid');
            background.classList.add('unopenable-bg'); // Add a class for unopenable background styling
            textContent.classList.add('unopenable-text'); // Add a class for unopenable text styling
        }

        gridContainer.appendChild(gridItem);
    }
});
