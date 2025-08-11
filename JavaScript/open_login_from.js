function openLogin() {
    const loginForm = document.getElementById("login_form");
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "flex"; // flex for centering
        document.body.classList.add("no-scroll");
    } else {
        closeLogin();
    }
}

function closeLogin() {
    const loginForm = document.getElementById("login_form");
    loginForm.style.display = "none";
    document.body.classList.remove("no-scroll");
}

// Hide when clicking outside
document.addEventListener("click", function (event) {
    const loginForm = document.getElementById("login_form");
    const triggerElement = document.querySelector(".trigger-login");
    if (
        loginForm &&
        loginForm.style.display === "flex" &&
        !loginForm.querySelector(".manage-box-login-center").contains(event.target) &&
        !triggerElement.contains(event.target)
    ) {
        closeLogin();
    }
});

// Hide by default on page load
document.addEventListener("DOMContentLoaded", () => {
    closeLogin();
});

// Hide when resizing browser (responsive)
window.addEventListener('resize', function () {
    const loginForm = document.getElementById("login_form");
    if (loginForm && loginForm.style.display === "flex") {
        closeLogin();
    }
});
