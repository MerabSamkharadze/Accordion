const accordion_header = document.querySelectorAll(".accordion-header");
const txtOne = document.getElementById("accardion_one");
const txtTwo = document.getElementById("accardion_two");
const txtThree = document.getElementById("accardion_three");
const accordion_button = document.querySelectorAll(".accordion-button");

accordion_button.forEach((element) => {
  const icone = document.createElement("img");
  icone.setAttribute("src", "images/down.svg");
  element.appendChild(icone);
});

accordion_header.forEach((element) => {
  element.addEventListener("click", function () {
    if (this.textContent.trim() == "Accordion Item #1") {
      txtOne.classList.toggle("none");
      if (this.innerHTML.includes("down.svg")) {
        this.innerHTML = `<button class="accordion-button" type="button">
    Accordion Item #1
  <img src="images/up.svg"></button>`;
      } else
        this.innerHTML = `<button class="accordion-button" type="button">
    Accordion Item #1
  <img src="images/down.svg"></button>`;
    } else if (this.textContent.trim() == "Accordion Item #2") {
      txtTwo.classList.toggle("none");
      if (this.innerHTML.includes("down.svg")) {
        this.innerHTML = `<button class="accordion-button" type="button">
    Accordion Item #2
  <img src="images/up.svg"></button>`;
      } else
        this.innerHTML = `<button class="accordion-button" type="button">
    Accordion Item #2
  <img src="images/down.svg"></button>`;
    } else if (this.textContent.trim() == "Accordion Item #3") {
      txtThree.classList.toggle("none");
      if (this.innerHTML.includes("down.svg")) {
        this.innerHTML = `<button class="accordion-button" type="button">
    Accordion Item #3
  <img src="images/up.svg"></button>`;
      } else
        this.innerHTML = `<button class="accordion-button" type="button">
    Accordion Item #3
  <img src="images/down.svg"></button>`;
    }
  });
});
