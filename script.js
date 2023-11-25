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
