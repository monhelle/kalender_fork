
let startX, startY, endX, endY;

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

document.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function (e) {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    let deltaX = endX - startX;
    let deltaY = endY - startY;
    // Check if the movement was mostly horizontal
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe; positive value means left swipe,
        // negative value means right swipe.
        deltaX > 0 ? setNextDate(-1) : setNextDate(1);
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

    if(isValidDate(newDate)){
        console.log('date was valid!')
        pathParts[pathParts.length-1] = newDate > 0 && newDate <= 24 ? newDate : pathParts[pathParts.length-1];
        window.location.assign(`/${pathParts.join('/')}`);
    }
}

function isValidDate(nextdate){
    isValid = false;
    let date = new Date();
    
    // zero based counting leaves -1 offset for numbers of months
    if(date.getMonth() > 10 && date.getDate() >= nextdate) {
        isValid = true;
    }

    return isValid;
}