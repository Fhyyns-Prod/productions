document.addEventListener("DOMContentLoaded", function() {
    document.forms["form"].addEventListener("submit", function(event) {
      event.preventDefault();
      
      var username = document.getElementById("username").value;
      var password = document.getElementsByName("password")[0].value;
    
      // Perform authentication check (can be done via server-side API or database)
      if (username === "admin@123.com" && password === "password") {
        // Successful login, redirect to another page
        window.location.href = "booking/index.html"; // Replace "dashboard.html" with your desired page
      } else {
        // Display login error message
        document.getElementById("login-error").textContent = "Invalid username or password.";
      }
    });
  });
  