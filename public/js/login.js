const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Add event listener for the form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the username and password inputs
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Perform client-side validation (you can customize this)
    if (!username || !password) {
        alert('Please fill in both username and password fields.');
        return;
    }

    // Send a POST request to your server for authentication
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Redirect to profile page
            window.location.href = '/profile'; 
        } else {
            // Display an error message (e.g., invalid credentials)
            alert('Invalid username or password. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle any other errors that may occur during the fetch
    }
});