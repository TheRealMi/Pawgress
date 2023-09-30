const signupForm = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const emailInput = document.querySelector('input[type="email"]');
const petNameInput = document.querySelector('input[type="pet"]');
const breedInput = document.querySelector('input[type="breed"]');

// Add event listener for the form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the user inputs
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();
    const pet_name = petNameInput.value.trim();
    const breed = breedInput.value.trim();

    // Perform client-side validation (you can customize this)
    if (!username || !password) {
        alert('Please fill in both username and password fields.');
        return;
    }

    // Send a POST request to your server for authentication
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password, email, pet_name, breed }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Redirect to a success page or perform other actions
            window.location.href = '/profile'; 
        } 
    } catch (error) {
        console.error('Error:', error);
        // Handle any other errors that may occur during the fetch
    }
});