const themeSelector = document.querySelector(".theme")

function changeTheme() {
    selectedTheme = themeSelector.value;
    if (selectedTheme == "dark") {
        document.body.classList.add("dark");
        let image = document.getElementById("logo");
        image.setAttribute("src", "byui-logo_white.png");
    } 
    
    else if (selectedTheme == "light") {
        document.body.classList.remove("dark");
        let image = document.getElementById("logo");
        image.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener('change', changeTheme);