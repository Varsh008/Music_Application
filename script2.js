// script.js

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (more detailed validation can be added)
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate a successful sign-in (you would send data to a backend here)
    alert(`Welcome ${email}! You have successfully signed in.`);

    // Redirect to the home page after a successful sign-in
    window.location.href = 'home.html'; // Change 'home.html' to your actual home page file

    // Clear form fields (optional, but usually not necessary after redirection)
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
