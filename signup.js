<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Page</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <div class="signup-container container mt-5">
        <form action="dashboard.html" method="post" class="form-signin">
            <h2 class="form-signin-heading">Sign Up Page</h2>
            <label for="username" class="sr-only">Username</label>
            <input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus>
            <label for="password" class="sr-only">Password</label>
            <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
            <label for="email" class="sr-only">Email</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
            <label for="role" class="sr-only">Role</label>
            <select id="role" name="role" class="form-control mt-3">
                <option value="student">Student</option>
                <option value="admin">Admin</option>
            </select>
            <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign Up</button>
        </form>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('signup-form').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the default form submission

                // Get form values
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                var email = document.getElementById('email').value;
                var role = document.getElementById('role').value;

                // Perform form validation or any other necessary logic
                // For example, you can validate the input fields here

                // Submit the form or perform any other actions (you can replace this with your own logic)
                console.log('Username:', username);
                console.log('Password:', password);
                console.log('Email:', email);
                console.log('Role:', role);

                // Redirect to the dashboard page (replace 'dashboard.html' with your actual dashboard page URL)
                window.location.href = 'dashboard.html';
            });
        });
    </script>
</body>
</html>
