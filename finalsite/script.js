let popupButton = document.getElementById("popupButton");
let popupContainer = document.getElementById("popupContainer");
let closeButton = document.getElementById("closeButton");

popupButton.addEventListener("click", function() {
    popupContainer.style.display = "block";
});

closeButton.addEventListener("click", function() {
    popupContainer.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == popupContainer) {
        popupContainer.style.display = "none";
    }
});
