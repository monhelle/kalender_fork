document.addEventListener('DOMContentLoaded', function () {
    let gridContainer = document.getElementById('grid-container');

    // Get the current date
    let currentDate = new Date();

    // Get the current day in December
    let currentDayInDecember = currentDate.getDate();

    for (let i = 1; i <= 24; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        // Additional elements for the gift box design
        let ribbon = document.createElement('div');
        ribbon.className = 'ribbon';
        gridItem.appendChild(ribbon);

        let bow = document.createElement('div');
        bow.className = 'bow';
        gridItem.appendChild(bow);

        let lid = document.createElement('div');
        lid.className = 'lid';
        gridItem.appendChild(lid);

        // Create a background element
        let background = document.createElement('div');
        background.className = 'background';
        gridItem.appendChild(background);

        // Create the text content element
        let textContent = document.createElement('i');
        textContent.textContent = i;
        textContent.className = 'grid-item-text'; // Add a specific class for styling

        // Append the text content to the grid item
        gridItem.appendChild(textContent);

        // Check if the item can be opened based on the day in December
        if (i <= currentDayInDecember) {
            gridItem.classList.add('openable');

            // Add a random palette class for openable items
            let randomPaletteNumber = Math.floor(Math.random() * 3) + 1; // Assuming you have 3 palettes
            gridItem.classList.add('openable' + randomPaletteNumber);

            // Add corresponding palette classes to ribbon, lid, and bow
            ribbon.classList.add('openable-rib' + randomPaletteNumber);
            bow.classList.add('openable-rib' + randomPaletteNumber);
            lid.classList.add('openable-lid' + randomPaletteNumber);

            // Check if the item was previously opened
            let isOpened = localStorage.getItem('box' + i);

            if (isOpened) {
                gridItem.style.opacity = 0.5; // Set the opacity if the box was opened
            }

            gridItem.addEventListener('click', function () {
                // Add your custom logic for handling opened items
                let itemNumber = this.querySelector('.grid-item-text').textContent;
                localStorage.setItem('currentPageIndex', itemNumber);
                window.location.href = '/december/' + itemNumber; // Redirect to a new page with the item number as a parameter

                // Toggle the opacity and store the state in local storage
                {
                    this.style.opacity = 0.5;
                    localStorage.setItem('box' + itemNumber, 'opened');
                }
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
