function toggleNavigation() {
  const nav = document.getElementById("nav");
    if (nav.style.display == "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
  }
}

document.querySelector("#toggle").addEventListener("click", toggleNavigation);