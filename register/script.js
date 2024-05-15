document.getElementById("registration-form").onsubmit = function (event) {
  event.preventDefault();

  // Here you would normally handle the form submission, like sending data to a server
  // For demonstration, we'll just log to the console
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem.");
    return false;
  }

  console.log("Name:", name);
  console.log("Phone:", phone);
  console.log("Email:", email);
  console.log("Password:", password);

  alert("Cadastro realizado com sucesso!");
  return true;
};
