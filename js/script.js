let button = document.querySelector(".hamburger");
let navlist = document.querySelector(".navlink-outwrapper");
console.log(navlist);

button.addEventListener("click", () => {
  navlist.classList.toggle("show");
});
