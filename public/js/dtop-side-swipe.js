document.addEventListener('keydown', e => {
    console.log("Key released:", e.key);

    switch(e.key) {
        case 'ArrowLeft':
            setNextDate(-1);
            break;
        case 'ArrowDown':
            setNextDate(-1);
            break;
        case 'ArrowRight':
            setNextDate(1);
            break;
        case 'ArrowUp':
            setNextDate(1);
            break;
        case 'Escape':
            window.location.assign('/');
            break;
        default:
            break;
    }
});

/**
 * @param {Number} nextDate the next date you want to display, relative to the current date. Will add positive numbers, and subtract
 * negative numbers.
 */
function setNextDate(nextDate){
    let pathParts = window.location.pathname.split('/');

    //remove the empty strings from the array
    pathParts = pathParts.filter( item => { 
        return typeof(item) === 'number' || typeof(item) === 'string' && item.length > 0;
    });

    let newDate =  Number(pathParts[pathParts.length-1]) + nextDate;
    pathParts[pathParts.length-1] = newDate > 0 && newDate <= 24 ? newDate : pathParts[pathParts.length-1];
 
    window.location.assign(`/${pathParts.join('/')}`);

}

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM content loaded');
//    let currentDayInDecember = new Date().getDate();

   


//    document.addEventListener('keydown', function(e) {
//        console.log("Key pressed:", e.key);

//        let direction = e.key === 'ArrowLeft' ? 'left' : e.key === 'ArrowRight' ? 'right' : '';

       

//        if (direction !== '') {
//            let pathParts = window.location.pathname.split('/');
//            let itemNumberIndex = pathParts.indexOf('december') + 1;
//            let itemNumber = itemNumberIndex < pathParts.length ? parseInt(pathParts[itemNumberIndex]) : NaN;

//            console.log("Item Number:", itemNumber);

//            if (!isNaN(itemNumber)) {
//                let nextItemNumber;


//                if (direction === 'left' && itemNumber === 1) {
//                    // Left arrow at item 1, redirect to root
//                    let rootUrl = '/';
//                    console.log("Redirecting to root:", rootUrl);
//                    window.location.assign(rootUrl);
//                    return;
//                }

//                if (direction === 'left' && itemNumber > 1) {
//                    // Left arrow (go to the previous date)
//                    nextItemNumber = itemNumber - 1;
//                } else if (direction === 'right') {
//                    // Right arrow (go to the next date)
//                    nextItemNumber = itemNumber + 1;
//                }

//                console.log("Next Item Number:", nextItemNumber);

//                if (nextItemNumber <= currentDayInDecember) {
//                    let nextItemUrl = '/' + nextItemNumber;
//                    console.log('Next item URL:', nextItemUrl);

//                    // Update the URL without 'december' part
//                    pathParts[itemNumberIndex] = nextItemNumber;

//                    let finalUrl = pathParts.join('/');
//                    console.log('Final URL:', finalUrl);

//                    localStorage.setItem('box' + itemNumber, 'opened');
//                    localStorage.setItem('box' + nextItemNumber, 'opened');

//                    // Directly update the pathname
//                    //window.location.pathname = finalUrl;
//                } else {
//                    alert("Ikke den datoen ennå");
//                }
//            }
//        }
//    });

// });
