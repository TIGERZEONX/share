document.getElementById('login-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded username and password
    const validUsername = 'missionpupil';  // Replace 'yourusername' with your desired username
    const validPassword = '12345';  // Replace 'yourpassword' with your desired password

    // Check if entered username and password match
    if (username === validUsername && password === validPassword) {
        // Redirect to the main page
        window.location.href = 'main.html';
    } else {
        // Show an error message if login details are incorrect
        alert('Incorrect Username or Password!');
    }
});
