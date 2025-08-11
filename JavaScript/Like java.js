// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize Like Button
const likeButton = document.getElementById('like');
const likeCount = document.querySelector('#like span');

// Function to load the saved like count from Local Storage
function loadLikes() {
    const savedLikes = localStorage.getItem('likeCount');
    if (savedLikes) {
        likeCount.textContent = formatNumber(savedLikes);
    }
}

// Function to save the like count to Local Storage
function saveLikes(count) {
    localStorage.setItem('likeCount', count);
}

// Add click event listener
likeButton.addEventListener('click', () => {
    // Get the current like count
    let currentCount = parseInt(likeCount.textContent.replace(/,/g, ''), 10);
    // Increment the count
    currentCount++;
    // Update the like count with formatted number
    likeCount.textContent = formatNumber(currentCount);
    // Save the updated count to Local Storage
    saveLikes(currentCount);
});

// Load the like count when the page loads
loadLikes();
