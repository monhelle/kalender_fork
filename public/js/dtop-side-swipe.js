document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
   var currentDayInDecember = new Date().getDate();

   document.addEventListener('keyup', function(e) {
   console.log("Key released:", e.key);

   if (e.key === 'Escape') {
       window.location.replace('/');
   }
   });


   document.addEventListener('keydown', function(e) {
       console.log("Key pressed:", e.key);

       var direction = e.key === 'ArrowLeft' ? 'left' : e.key === 'ArrowRight' ? 'right' : '';

       if (direction !== '') {
           var pathParts = window.location.pathname.split('/');
           var itemNumberIndex = pathParts.indexOf('december') + 1;
           var itemNumber = itemNumberIndex < pathParts.length ? parseInt(pathParts[itemNumberIndex]) : NaN;

           console.log("Item Number:", itemNumber);

           if (!isNaN(itemNumber)) {
               var nextItemNumber;


               if (direction === 'left' && itemNumber === 1) {
                   // Left arrow at item 1, redirect to root
                   var rootUrl = '/';
                   console.log("Redirecting to root:", rootUrl);
                   window.location.assign(rootUrl);
                   return;
               }

               if (direction === 'left' && itemNumber > 1) {
                   // Left arrow (go to the previous date)
                   nextItemNumber = itemNumber - 1;
               } else if (direction === 'right') {
                   // Right arrow (go to the next date)
                   nextItemNumber = itemNumber + 1;
               }

               console.log("Next Item Number:", nextItemNumber);

               if (nextItemNumber <= currentDayInDecember) {
                   var nextItemUrl = '/' + nextItemNumber + '/';
                   console.log('Next item URL:', nextItemUrl);

                   // Update the URL without 'december' part
                   pathParts[itemNumberIndex] = nextItemNumber;

                   var finalUrl = pathParts.join('/');
                   console.log('Final URL:', finalUrl);

                   // Directly update the pathname
                   window.location.pathname = finalUrl;
               } else {
                   alert("Ikke den datoen ennå");
               }
           }
       }
   });

});