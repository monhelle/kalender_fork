document.addEventListener('DOMContentLoaded', function() {
    var startX, startY, endX, endY;

    document.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    document.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        var deltaX = endX - startX;
        var deltaY = endY - startY;

        // Check if the movement was mostly horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            var direction = deltaX > 0 ? 'left' : 'right';

            // Get the current date
            var currentDate = new Date();

            // Get the current day in December
            var currentDayInDecember = currentDate.getDate();

            // Extract itemNumber from the URL
            var pathParts = window.location.pathname.split('/');
            var itemNumberIndex = pathParts.indexOf('december') + 1;
            var itemNumber = itemNumberIndex < pathParts.length ? parseInt(pathParts[itemNumberIndex]) : NaN;

            if (!isNaN(itemNumber)) {
                var nextItemNumber;

                if (direction === 'left' && itemNumber === 1) {
                    // Swipe right at item 1, redirect to root
                    var rootUrl = '/';
                    console.log("Redirecting to root:", rootUrl);
                    window.location.href = rootUrl;
                    return;
                }

                if (direction === 'left' && itemNumber > 1) {
                    // Swipe right (go to the previous date)
                    nextItemNumber = itemNumber - 1;
                } else if (direction === 'right') {
                    // Swipe left (go to the next date)
                    nextItemNumber = itemNumber + 1;
                }

                // Check if nextItemNumber is beyond the current date
                if (nextItemNumber <= currentDayInDecember) {
                    // Construct the URL for the next item
                    var nextItemUrl = '/' + nextItemNumber + '/content.html';
                    console.log('Next item URL:', nextItemUrl);

                    // Remove the current item number from the URL
                    pathParts.splice(itemNumberIndex, 1);

                    // Add the next item number to the URL
                    pathParts.splice(itemNumberIndex, 0, nextItemNumber);

                    // Join the path parts to construct the final URL
                    var finalUrl = pathParts.join('/');
                    console.log('Final URL:', finalUrl);

                    // Redirect to the next item
                    window.location.href = finalUrl;
                } else {
                    // Alert if the swipe would go beyond the current date
                    alert("Ikke den datoen ennå");
                }
            }
        }
    });
});