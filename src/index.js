import "./less/index.less";

// Your code goes here!
// MOUSEOVER
const logoHeader = document.querySelector(".logo-heading");
// console.log(logoHeader);
logoHeader.addEventListener(
  "mouseover",
  () => {
    logoHeader.style.color = "blue";
    setTimeout(() => {
      logoHeader.style.color = "";
    }, 4000);
  },
  false
);

// KEYDOWN
document.addEventListener("keydown", (e) => {
  //console.log(e.key);
  if (e.key === "Escape") {
    logoHeader.textContent = "Easter EGG!";
  }
});

//
