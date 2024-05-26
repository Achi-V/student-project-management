<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>sign up</title>
  <title>Sign Up</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="up.css">
  <script src="https://kit.fontawesome.com/a6c6f65353.js" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar navbar-expand-xl bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"><i class="fa-solid fa-circle-user fa-bounce fa-2sm"></i></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://ndl.iitkgp.ac.in/">Encylopedia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://justbooks.in/">Rentals</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search">
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
    <div class="container">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="signup2.jpg" class="d-block" style="width:100%">
                <div class="carousel-caption">
                    <p>"When in doubt go to the Library."</p>
                    <h5>—J.K. Rowling</h3>
                  </div>
              </div>
              <div class="carousel-item">
                <img src="sideimage.jpg" class="d-block" style="width:100%">
                <div class="carousel-caption">
                    <p>“Libraries are where it all begins.”</p>
                    <h5>—Rita Dove</h3>
                  </div>
              </div>
              <div class="carousel-item">
                <img src="sideimage1.jpg"  class="d-block" style="width:100%">
                <div class="carousel-caption">
                    <p>“Reading brings us unknown friends.”</p>
                    <h5>—Honoré Balzac</h3>
                  </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
         </div>
            <div class="wrapper">
            <div class="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div class="input-group">
                        <input type="text" required>
                        <label for="">Department Name</label>
                      </div>
                    <div class="input-group">
                      <input type="text" required>
                      <label for="">Department Number</label>
                    </div> 
                <div class="input-group">
                        <input type="email" required>
                        <label for="">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" required>
                    <label for="">New Password</label>
                </div>
                <div class="input-group">
                    <input type="password" required>
                    <label for="">Correct Password</label>
                </div>
                <div class="remember">
                    <label><input type="checkbox" required> I agree to the terms & conditions</label>
                </div>
            <button type="submit">Sign Up</button>
                <div class="signUp-link">
                    <p>Already have an account? <a href="facultyin.html" class="signInBtn-link">Sign In</a></p>
                </div>
                </form>
                <div class="dropdown">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                      Other Sign-in
                    </button>
                    <ul class="dropdown-menu">
                      <li><button type="button" class="btn btn-link"><i class="fa-solid fa-right-to-bracket fa-bounce" style="color: #000000;"></i> Sign in with Mail</button></li>
                      <li><button type="button" class="btn btn-link"><i class="fa-brands fa-apple fa-bounce" style="color: #000000;"></i> Sign in with Apple</button></li>
                      <li><button type="button" class="btn btn-link"><i class="fa-solid fa-mobile-screen-button fa-shake" style="color: #000000;"></i> Sign in with Mobile</button></li>
                    </ul>
                  </div>
            </div>
        </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
  document.getElementById("signupBtn").addEventListener("click", function(event) {
      event.preventDefault();

      // Get form values
      var departmentName = document.getElementById("departmentName").value;
      var departmentNumber = document.getElementById("departmentNumber").value;
      var email = document.getElementById("email").value;
      var newPassword = document.getElementById("newPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      // Perform form validation
      if (departmentName.trim() === "" || departmentNumber.trim() === "" || email.trim() === "" || newPassword.trim() === "" || confirmPassword.trim() === "") {
          alert("Please fill in all fields.");
          return;
      }

      if (newPassword !== confirmPassword) {
          alert("Passwords do not match.");
          return;
      }

      // Simulate form submission (replace with actual form submission logic)
      alert("Department Name: " + departmentName + "\nDepartment Number: " + departmentNumber + "\nEmail: " + email + "\nPassword: " + newPassword);
      // Uncomment the line below to submit the form to the server
      // document.getElementById("signupForm").submit();
  });
</script>
</body>
</html>
