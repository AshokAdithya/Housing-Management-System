var overlay = document.querySelector(".overlay");
var detailsView = document.querySelector(".details-view");

var buttonOptions = document.querySelectorAll(".button-options");

buttonOptions[0].style.border = "3px solid #00adb5";

buttonOptions.forEach((button) => {
  button.addEventListener("click", () => {
    buttonOptions.forEach((otherButton) => {
      otherButton.style.border = "none";
    });

    button.style.border = "3px solid #00adb5";
  });
});

function openModal() {
  overlay.style.display = "flex";
  detailsView.style.display = "flex";
}

function closeModal() {
  overlay.style.display = "none";
  detailsView.style.display = "none";
}

var payment = document.querySelectorAll(".fee");
