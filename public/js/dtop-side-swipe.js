document.addEventListener('DOMContentLoaded', function() {
    var currentDayInDecember = new Date().getDate();

    document.addEventListener('keydown', function(e) {
        var direction = '';

        if (e.keyCode === 37) {
            // Left arrow key
            direction = 'left';
        } else if (e.keyCode === 39) {
            // Right arrow key
            direction = 'right';
        }

        if (direction !== '') {
            var pathParts = window.location.pathname.split('/');
            var itemNumberIndex = pathParts.indexOf('december') + 1;
            var itemNumber = itemNumberIndex < pathParts.length ? parseInt(pathParts[itemNumberIndex]) : NaN;

            if (!isNaN(itemNumber)) {
                var nextItemNumber;

                if (direction === 'left' && itemNumber === 1) {
                    // Left arrow at item 1, redirect to root
                    var rootUrl = '/';
                    console.log("Redirecting to root:", rootUrl);
                    window.location.href = rootUrl;
                    return;
                }

                if (direction === 'left' && itemNumber > 1) {
                    // Left arrow (go to the previous date)
                    nextItemNumber = itemNumber - 1;
                } else if (direction === 'right') {
                    // Right arrow (go to the next date)
                    nextItemNumber = itemNumber + 1;
                }

                if (nextItemNumber <= currentDayInDecember) {
                    var nextItemUrl = '/' + nextItemNumber + '/';
                    console.log('Next item URL:', nextItemUrl);

                    pathParts.splice(itemNumberIndex, 1);
                    pathParts.splice(itemNumberIndex, 0, nextItemNumber);

                    var finalUrl = pathParts.join('/');
                    console.log('Final URL:', finalUrl);

                    window.location.href = finalUrl;
                } else {
                    alert("Ikke den datoen ennå");
                }
            }
        }
    });
});
