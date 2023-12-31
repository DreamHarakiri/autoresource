const menuNavigation = document.querySelector(".NavSection");
const menuButton = document.querySelector(".menuButton");

function useMenu() {
  if (menuButton.classList.toggle("show")) {
    //inactive
    menuNavigation.classList.add("activeMenu");
  } else {
    //active
    menuNavigation.classList.remove("activeMenu");
  }
}

menuButton.addEventListener("click", function () {
  useMenu();
});
