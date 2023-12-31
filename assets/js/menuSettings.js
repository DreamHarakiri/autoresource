const menuNavigation = document.querySelector(".NavSection");
const menuButton = document.querySelector(".menuButton");
const btnCall = document.querySelector(".btnContact__Nav");
const btnMap = document.querySelector(".findMap");

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

btnCall.addEventListener("click", function () {
  document.location.href = "tel:+74852682348";
});

btnMap.addEventListener("click", function () {
  document.location.href =
    "https://yandex.ru/maps/16/yaroslavl/house/ulitsa_kalinina_18/Z0AYfgJiTEECQFttfXl2c39qbQ==/?from=mapframe&ll=39.852474%2C57.572590&source=mapframe&utm_source=mapframe&z=16";
});
