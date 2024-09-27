// script.js

// Simulated user database (in a real application, this would be done through a backend)
const users = [
    { email: "user@example.com", password: "password123" }, // Example user
    // Add more users as needed
];

// Event listener for sign in form
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Simulate successful sign-in
        alert(`Welcome back ${email}!`);
        // Redirect to the home page after a successful sign-in
        window.location.href = 'home.html'; // Change 'home.html' to your actual home page file
    } else {
        // Show error message if user does not exist
        errorMessage.style.display = "block"; // Show error message
    }

    // Clear form fields (optional, but usually not necessary after redirection)
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
