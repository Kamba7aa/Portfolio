const collapsibles = document.querySelectorAll(".sidebar");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("sidebar--expanded");
  })
);