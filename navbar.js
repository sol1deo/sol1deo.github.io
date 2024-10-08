// Function to update the navbar based on login status
function updateNavbar() {
    const loggedInUser = localStorage.getItem('username');
    const userDisplay = document.getElementById('user-name-display');
    const logoutButton = document.getElementById('logout-button');

    if (loggedInUser) {
        if (userDisplay) {
            userDisplay.textContent = loggedInUser; // Display the username
            userDisplay.href = 'profile.html'; // Redirect to profile page
        }
        if (logoutButton) {
            logoutButton.style.display = 'inline-block';
        }
    } else {
        if (userDisplay) {
            userDisplay.textContent = 'Login';
            userDisplay.href = 'login.html'; // Redirect to login page
        }
        if (logoutButton) {
            logoutButton.style.display = 'none';
        }
    }
}

// Call the function to update the navbar when the page loads
updateNavbar();

// Logout functionality
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('username'); // Clear username from localStorage
        updateNavbar(); // Update the navbar to reflect the logged-out state
        window.location.href = 'login.html'; // Redirect to login page
    });
}

