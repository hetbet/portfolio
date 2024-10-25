// CONSIDER IMPLEMENTING CHECK FOR HASH IN URL AND CHANGE COLOUR OF NAV OPTION
var links = document.getElementById("nav");

function showBurger() {
    if (!links.style.display || links.style.display == "none") {
        links.style.display = "unset";
    } else {
        links.style.display = "none";
    }
}

// Closes burger menu when section pressed
function closeBurger() {
    if (screen.width <= 1000) {
        links.style.display = "none";
    }
}