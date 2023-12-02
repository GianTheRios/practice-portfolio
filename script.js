// Light and Dark Mode

const switchBtn = document.getElementById("switch");
const handle = document.getElementById("handle");

let switchStatus = 0; // 0 = off, 1 = on

switchBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // light mode on
  if (switchStatus === 0) {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    handle.style.transform = "translateX(25px)";
    switchStatus = 1;
  } else {
    // dark mode on
    switchStatus = 0;
    document.documentElement.style.setProperty("--background-color", "#232323");
    document.documentElement.style.setProperty("--text-color", "white");
    handle.style.transform = "translateX(0)";
  }
}

// colorChangeSection

// window.addEventListener("scroll", () => {
//   const element = document.getElementById("heroChangeSection");
//   const aboutSection = document.getElementById("aboutChangeSection");
//   const verticalScrollPx = window.scrollY || window.pageYOffset;

//   if (verticalScrollPx < 700) {
//     aboutSection.style.backgroundColor = "#41a4f0eb";
//   } else if (verticalScrollPx > 500 && verticalScrollPx < 700) {
//     element.style.backgroundColor = "white";
//   } else {
//     element.style.backgroundColor = "#41a4f0eb";
//   }
// });
