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
