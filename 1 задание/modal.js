let btnopenwindow = document.querySelector(".btnopenwindow");
let modalWindow = document.querySelector(".modalWindow");

btnopenwindow.addEventListener("click", openwindow);

function closewindow() {
  modalWindow.style.display = "none";
}

function openwindow() {
  modalWindow.style.display = "block";
  document.getElementById("myDIV").style.animation = "anim1 10s forwards";
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".modalWindow") & !e.target.closest(".btnopenwindow"))
    closewindow();
});













