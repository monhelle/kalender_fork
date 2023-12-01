//this script handles dynamic generation of the grid items.
document.addEventListener('DOMContentLoaded', function () {
    const DAYSINCALENDAR = 24;
    let gridContainer = document.getElementById('grid-container');
    
    // Get the current date
    let currentDate = new Date();

    // Get the current day in December
    let currentDayInDecember = currentDate.getDate();

    for (let i = 1; i <= DAYSINCALENDAR; i++) {
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
            
            gridItem.addEventListener('click', e => {
                e.preventDefault();
                // Add your custom logic for handling opened items
                let itemNumber = this.querySelector('.grid-item-text').textContent;
                localStorage.setItem('currentPageIndex', itemNumber);
                const href = `/december/${itemNumber}`;
                window.location.href = href; // Redirect to a new page with the item number as a parameter
            });
        } else {
            // gridItem.classList.add('unopenable');
            // ribbon.classList.add('unopenable-rib');
            // bow.classList.add('unopenable-rib');
            // lid.classList.add('unopenable-lid');
            // background.classList.add('unopenable-bg'); // Add a class for unopenable background styling
            // textContent.classList.add('unopenable-text'); // Add a class for unopenable text styling
            let itemNumber = this.querySelector('.grid-item-text').textContent;
            localStorage.setItem('currentPageIndex', itemNumber);
            const href = `/december/${itemNumber}`;
            window.location.href = href; // Redirect to a new page with the item number as a parameter

        
        }

        gridContainer.appendChild(gridItem);
    }
});
