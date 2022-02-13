const ModalContainer = document.createElement("div");
ModalContainer.setAttribute("class", "modal-container");
const Modal = document.createElement("div");
const body = document.getElementById("body");
Modal.setAttribute("class", "modal");
const img = document.createElement("img");
img.src = "./imgs/page-under-construction-icon.png";
Modal.appendChild(img);
ModalContainer.appendChild(Modal);
const buttons = document.querySelectorAll(".button");

Array.from(buttons).map((element) => {
  element.addEventListener("click", () => openModal());
});

const openModal = () => {
  ModalContainer.style.animationName = "fade-in";
  body.appendChild(ModalContainer);
  setTimeout(() => {
    ModalContainer.style.animationName = "fade-out";
  }, 2000);
  setTimeout(() => {
    ModalContainer.parentNode.removeChild(ModalContainer);
  }, 3000);
};
