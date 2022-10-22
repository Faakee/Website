const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;
slide = (direction) => {
  direction === "next" ? translate -= translateAmount : translate += translateAmount;
  pages.forEach(
    pages => (pages.style.transform = `translateX(${translate}%)`)
  );
}

function showTechnical() {
  var element = document.getElementById("technical");
  element.classList.remove("hidden");
  var element2 = document.getElementById("computer");
  element2.classList.add("hidden");
}

function showComputer() {
  var element = document.getElementById("technical");
  element.classList.add("hidden");
  var element2 = document.getElementById("computer");
  element2.classList.remove("hidden");
}