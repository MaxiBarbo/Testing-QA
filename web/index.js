$(document).ready(function () {
               

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      $('main').toggleClass('.invisible')
     
  });
});

const toggleButton = document.getElementById("sidebarCollapse");
const toggleText = document.getElementById("text");
const originalText = toggleText.textContent;

toggleButton.addEventListener("click", () => {
if (toggleText.textContent === originalText) {
  toggleText.textContent = "Nav";
} else {
  toggleText.textContent = originalText;
}
});

// Funcion para cambiar de Theme
function toggleTheme() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark");

  var themeableElements = document.getElementsByClassName("themeable");
  for (var i = 0; i < themeableElements.length; i++) {
    themeableElements[i].classList.toggle("dark");
  }
}

// Funcion para ocultar elementos html al cambiar version Mobile


  


