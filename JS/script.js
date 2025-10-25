console.log("hello");
const hamburger = document.getElementById("hamburger");
const closeX = document.getElementById("closeX");
const menu = document.getElementById("menu");
const closeOpenIcons = document.getElementById("closeOpenIcons");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
  closeX.style.display = "inline-flex";
  hamburger.style.display = "none";
});
closeX.addEventListener("click", () => {
  //   menu.style.display = "none";
  menu.classList.remove("show");
  hamburger.style.display = "inline-flex";
  closeX.style.display = "none";
});

// close menu when clicking outside (mobile only)
window.addEventListener("click", (e) => {
  if (
    !hamburger.contains(e.target) &&
    window.innerWidth < 768 &&
    !closeX.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    menu.classList.remove("show");
    hamburger.style.display = "inline-flex";
    closeX.style.display = "none";
  }
});

//dark or bright background
function changecolor() {
  document.body.classList.toggle("dark");
}

const footerBlocks = document.getElementsByClassName("footerBlocks");
console.log(footerBlocks);
//return HTML collection. So convert it to array or use querySelectrolAll(".footerBlocks")

const footerLinks = Array.from(footerBlocks);
footerLinks.forEach((list) => {
  list.addEventListener("click", () => {
    if (!list.classList.contains("active")) list.classList.add("active");
    else list.classList.remove("active");
  });
});
