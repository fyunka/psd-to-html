menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");

  // === -> cравнивает на идентичность, а == -> на равенство
  // перед responsive обязательно нужно поставить пробел, иначе верстка сломается
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
