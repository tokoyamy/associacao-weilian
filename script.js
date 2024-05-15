function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("theme-dark");
    // outras alterações para o tema escuro
  } else {
    document.body.classList.remove("theme-dark");
    // outras alterações para o tema claro ou automático
  }
  // Salvar a preferência de tema...
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validação do campo de e-mail
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailField.classList.add("is-invalid");
      return;
    } else {
      emailField.classList.remove("is-invalid");
      emailField.classList.add("is-valid");
    }

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const subject = document.getElementById("subject").value;
    const how = document.getElementById("how").value;

    // Prepara o objeto de parâmetros para o EmailJS
    const templateParams = {
      nome: nome,
      telefone: telefone,
      email: email,
      subject: subject,
      how: how,
    };

    // Envia o e-mail usando EmailJS
    emailjs.send("service_laywg0u", "template_0jgbudf", templateParams).then(
      function (response) {
        console.log(
          "E-mail enviado com sucesso!",
          response.status,
          response.text
        );
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contactForm").reset();
        emailField.classList.remove("is-valid");
      },
      function (error) {
        console.error("Falha ao enviar e-mail.", error);
        alert("Falha ao enviar a mensagem. Tente novamente mais tarde.");
      }
    );
  });
