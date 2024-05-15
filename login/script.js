document.getElementById("loginForm").onsubmit = function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // Add your JavaScript for login here
  // For now, just log to the console
  console.log("Login attempt with:", email, password);
};
