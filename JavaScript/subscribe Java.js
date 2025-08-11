// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to load the saved subscriber count from Local Storage
function loadSubscribers() {
    const savedSubscribers = localStorage.getItem('subscriberCount');
    if (savedSubscribers) {
        document.getElementById('subscriber-count').textContent = `អ្នក​ជាវ ${formatNumber(savedSubscribers)} នាក់`;
    }
}

// Function to save the subscriber count to Local Storage
function saveSubscribers(count) {
    localStorage.setItem('subscriberCount', count);
}

// Function to handle subscribe/unscribe action
function subscribe() {
    const subscriberCountElement = document.getElementById('subscriber-count');
    const subscribeButton = document.querySelector('.subscribe');
    const subscribeIcon = document.querySelector('.subscribe i'); // The icon element

    // Get the current like count and check if subscribed or not
    let currentCount = parseInt(subscriberCountElement.textContent.replace(/\D/g, ''), 10);
    
    if (subscribeButton.textContent === 'ជាវ') {
        // Subscribe action (increment count)
        currentCount++;
        subscriberCountElement.textContent = `អ្នក​ជាវ ${formatNumber(currentCount)} នាក់`;
        saveSubscribers(currentCount);
        subscribeButton.textContent = 'បានជាវ'; // Change button text to 'Subscribed'
        
        // Change background color and add icon when subscribed
        subscribeButton.style.backgroundColor = '#4CAF50'; // Green color for 'Subscribed'
        subscribeButton.style.color = 'white'; // White text color
        subscribeIcon.classList.add('bi-bell-fill'); // Add the bell icon
        subscribeIcon.classList.remove('bi-bell'); // Remove the default bell icon if any
    } else if (subscribeButton.textContent === 'បានជាវ') {
        // Unsubscribe action (decrement count)
        currentCount--;
        if (currentCount < 0) currentCount = 0; // Prevent negative count
        subscriberCountElement.textContent = `អ្នក​ជាវ ${formatNumber(currentCount)} នាក់`;
        saveSubscribers(currentCount);
        subscribeButton.textContent = 'ឈប់ជាវ'; // Change button text to 'Unsubscribe'
        
        // Change background color when unsubscribed
        subscribeButton.style.backgroundColor = '#FFC107'; // Yellow color for 'Unsubscribe'
        subscribeButton.style.color = 'black'; // Black text color
        subscribeIcon.classList.remove('bi-bell-fill'); // Remove the filled bell icon
        subscribeIcon.classList.add('bi-bell'); // Add the regular bell icon
    } else if (subscribeButton.textContent === 'ឈប់ជាវ') {
        // Return to 'Subscribe' state
        subscriberCountElement.textContent = `អ្នក​ជាវ ${formatNumber(currentCount)} នាក់`;
        saveSubscribers(currentCount);
        subscribeButton.textContent = 'ជាវ'; // Change button text to 'Subscribe'
        
        // Reset background color when reset to 'Subscribe'
        subscribeButton.style.backgroundColor = ''; // Reset to default
        subscribeButton.style.color = ''; // Reset to default
        subscribeIcon.classList.remove('bi-bell-fill'); // Remove the filled bell icon
        subscribeIcon.classList.add('bi-bell'); // Add the regular bell icon
    }
}

// Load the subscriber count when the page loads
loadSubscribers();
