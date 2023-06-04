const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchbox = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  main = body.querySelector(".main"),
  hero = body.querySelector(".hero");

console.log(hero);
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

//monkey
