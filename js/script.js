// CONSIDER IMPLEMENTING CHECK FOR HASH IN URL AND CHANGE COLOUR OF NAV OPTION
var links = document.getElementById("nav");

/* BURGER MENU */
// SHOW burger menu
function showBurger() {
    if (!links.style.display || links.style.display == "none") {
        links.style.display = "unset";
    } else {
        links.style.display = "none";
    }
}

// HIDE burger menu ON WIDE SCREENS 
function closeBurger() {
    if (screen.width <= 1000) {
        links.style.display = "none";
    }
}