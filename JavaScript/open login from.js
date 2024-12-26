function openLogin() {
    // Get the login form element
    const loginForm = document.getElementById("login_form");

    // Toggle the visibility of the login form
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block"; // Show the form
        // Disable page scroll by adding a class to body
        document.body.classList.add("no-scroll");
    } else {
        loginForm.style.display = "none"; // Hide the form
        // Enable page scroll by removing the class from body
        document.body.classList.remove("no-scroll");
    }
}

// Hide the login form when clicking outside of a specific element
document.addEventListener("click", function (event) {
    const loginForm = document.getElementById("login_form");
    const triggerElement = document.querySelector(".bi-person-circle"); // Adjust to match your clickable icon
    if (
        loginForm &&
        loginForm.style.display === "block" &&
        !loginForm.contains(event.target) && // Check if click is outside the login form
        event.target !== triggerElement // Check if click is not on the trigger element
    ) {
        loginForm.style.display = "none"; // Hide the form
        // Enable page scroll by removing the class from body
        document.body.classList.remove("no-scroll");
    }
});

// Ensure the login form is hidden by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login_form");
    if (loginForm) {
        loginForm.style.display = "none";
    }
});

// Detect resize event (when browser is maximized)
window.addEventListener('resize', function () {
    const loginForm = document.getElementById("login_form");
    if (loginForm && loginForm.style.display === "block") {
        // Ensure the form stays displayed and body doesn't scroll
        document.body.classList.add("no-scroll");
    }
});
