function reportcomment() {
    const reportBox = document.getElementById('reportcommentshow');
  
    // Toggle display of the report box
    if (reportBox.style.display === 'block') {
      reportBox.style.display = 'none'; // Hide the report box
      document.body.style.overflow = ''; // Enable scrolling
    } else {
      reportBox.style.display = 'block'; // Show the report box
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
  }
  
  // Optional: Close the report box when clicking outside it
  document.addEventListener('click', (event) => {
    const reportBox = document.getElementById('reportcommentshow');
    if (reportBox.style.display === 'block' && !event.target.closest('#reportcommentshow') && !event.target.closest('.bi-three-dots-vertical')) {
      reportBox.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  