const accordion_header = document.querySelectorAll(".accordion-header");
const txtOne = document.getElementById("accardion_one");
const txtTwo = document.getElementById("accardion_two");
const txtThree = document.getElementById("accardion_three");

accordion_header.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.textContent.trim() == "Accordion Item #1") {
      txtOne.classList.toggle("none");
    } else if (e.target.textContent.trim() == "Accordion Item #2") {
      txtTwo.classList.toggle("none");
    } else if (e.target.textContent.trim() == "Accordion Item #3") {
      txtThree.classList.toggle("none");
    }
  });
});
