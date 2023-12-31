const menuNavigation = document.querySelector(".NavSection");
const menuButton = document.querySelector(".menuButton");
const btnCall = document.querySelector(".btnContact__Nav");
const btnMap = document.querySelector(".findMap");
const menuCurrent = document.querySelectorAll("#menulink");

function useMenu() {
  if (menuButton.classList.toggle("show")) {
    //inactive
    menuNavigation.classList.add("activeMenu");
    menuButton.classList.remove("bi-list");
    menuButton.classList.add("bi-x");
  } else {
    //active
    menuNavigation.classList.remove("activeMenu");
    menuButton.classList.add("bi-list");
    menuButton.classList.remove("bi-x");
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

menuCurrent.forEach((i) => {
  i.addEventListener("click", function () {
    menuButton.classList.toggle("hidden");
    menuNavigation.classList.remove("activeMenu");
    menuButton.classList.add("bi-list");
    menuButton.classList.remove("bi-x");
  });
});
