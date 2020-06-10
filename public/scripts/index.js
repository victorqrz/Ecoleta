const searchButton = document.querySelector("#page-home main a");
const modalElement = document.querySelector("#modal");
const closeElement = document.querySelector("#modal .header a");

searchButton.addEventListener("click", () => {
  modalElement.classList.remove("hide");
});

closeElement.addEventListener("click", ()=>{
  modalElement.classList.add("hide");
});