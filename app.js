const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerModal = document.querySelector(".hamburger-modal");
const viewMoreA = document.querySelector(".view-more-a");
const group4 = document.querySelector(".group-4");
const group5 = document.querySelector(".group-5");
const group6 = document.querySelector(".group-6");

hamburgerMenu.addEventListener("click", toggleModal);
viewMoreA.addEventListener("click", displayGroup);
function toggleModal() {
  hamburgerModal.classList.toggle("hidden");
}

function displayGroup() {
  console.log("hi");
  group4.style.display = "block";
  group5.style.display = "block";
  group6.style.display = "block";
}
