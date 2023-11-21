const pages = ['/december/1/content.html', '/december/2/content.html', '/december/3/content.html', 'page3.html']; // Add more pages as needed
let currentPageIndex = 0;

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    // Navigate to the previous page
    if (currentPageIndex > 0) {
      currentPageIndex--;
      navigateToPage(currentPageIndex);
    }
  } else if (e.key === 'ArrowRight') {
    // Navigate to the next page
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      navigateToPage(currentPageIndex);
    }
  }
});

function navigateToPage(index) {
  const nextPage = pages[index];
  window.location.href = nextPage;
}
