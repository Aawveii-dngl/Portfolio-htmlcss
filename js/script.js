let button = document.querySelector(".hamburger");
let navlist = document.querySelector(".navlink-outwrapper");
console.log(navlist);

button.addEventListener("click", () => {
  navlist.classList.toggle("show");
});
//It is for js animations
window.addEventListener("scroll", () => {
  let content1 = document.querySelector(".skills");
  let currentposition1 = content1.getBoundingClientRect().top;
  let screenposition1 = window.innerHeight / 1.5;
  if (currentposition1 > screenposition1) {
    content1.classList.add("active1");
  } else {
    content1.classList.remove("active1");
  }
});
//Actually its creating problem in nav
