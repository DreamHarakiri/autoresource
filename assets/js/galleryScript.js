const imageBox = document.querySelector("#imageGallery");
const buttonImage__boxes = document.querySelectorAll(".cyrcleGallery");
const blockCyrcle__gallery = document.querySelector(".blockCyrcle__gallery");

const nextImageBtn = document.querySelector(".rightPart__Gallery");
const prevImageBtn = document.querySelector(".leftPart__Gallery");

import { initialPictures } from "./pictures.js";

let setImage = 0;

function setImageBox(e, i) {
  let activeButton__Image = document.querySelector(".activeCyrcle__gallery");

  if (activeButton__Image) {
    buttonImage__boxes.forEach((i) => {
      i.classList.remove("activeCyrcle__gallery");
    });
    e.classList.add("activeCyrcle__gallery");
  } else {
    e.classList.add("activeCyrcle__gallery");
  }

  console.log(initialPictures[0].url);
  imageBox.style.backgroundImage = "url(" + initialPictures[i].url + ")";
}

function nextImage() {
  setImage++;
  if (setImage < 7) {
    imageBox.style.backgroundImage =
      "url(" + initialPictures[setImage].url + ")";

    buttonImage__boxes.forEach((i) => {
      i.classList.remove("activeCyrcle__gallery");
      buttonImage__boxes[setImage].classList.add("activeCyrcle__gallery");
    });
  } else if (setImage > 6) {
    setImage = 0;
    imageBox.style.backgroundImage =
      "url(" + initialPictures[setImage].url + ")";

    buttonImage__boxes.forEach((i) => {
      i.classList.remove("activeCyrcle__gallery");
      buttonImage__boxes[setImage].classList.add("activeCyrcle__gallery");
    });
  }
}

function prevImage() {
  setImage--;
  if (setImage > 0) {
    imageBox.style.backgroundImage =
      "url(" + initialPictures[setImage].url + ")";

    buttonImage__boxes.forEach((i) => {
      i.classList.remove("activeCyrcle__gallery");
      buttonImage__boxes[setImage].classList.add("activeCyrcle__gallery");
    });
  } else if (setImage < 0) {
    setImage = 6;

    imageBox.style.backgroundImage =
      "url(" + initialPictures[setImage].url + ")";

    buttonImage__boxes.forEach((i) => {
      i.classList.remove("activeCyrcle__gallery");
      buttonImage__boxes[setImage].classList.add("activeCyrcle__gallery");
    });
  }
}

prevImageBtn.addEventListener("click", function () {
  prevImage();
});

nextImageBtn.addEventListener("click", function () {
  nextImage();
});

buttonImage__boxes.forEach((i) => {
  i.addEventListener("click", function () {
    if (i === buttonImage__boxes[0]) {
      setImage = 0;
    } else if (i === buttonImage__boxes[1]) {
      setImage = 1;
    } else if (i === buttonImage__boxes[2]) {
      setImage = 2;
    } else if (i === buttonImage__boxes[3]) {
      setImage = 3;
    } else if (i === buttonImage__boxes[4]) {
      setImage = 4;
    } else if (i === buttonImage__boxes[5]) {
      setImage = 5;
    } else if (i === buttonImage__boxes[6]) {
      setImage = 6;
    }
    setImageBox(i, setImage);
  });
});
