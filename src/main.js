// Detecta el idioma del navegador
let language = navigator.language || navigator.userLanguage;
language = language.substring(0, 2);

// Obtiene la ruta actual
const path = window.location.pathname;

// Redirige a la versión correspondiente de la página
if (language === "es" && !path.includes("/routes/es/")) {
  window.location.href = "es/index.html";
} else if (language !== "es" && !path.includes("/routes/en/")) {
  window.location.href = "./routes/en/index.html";
}
