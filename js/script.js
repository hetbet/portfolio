// CONSIDER IMPLEMENTING CHECK FOR HASH IN URL AND CHANGE COLOUR OF NAV OPTION
var links = document.getElementById("nav");

function updateNavFromHash() {
    const navOptions = links.getElementsByTagName("a");

    for (const navOption of navOptions) {
        if (navOption.href.endsWith(location.hash)) {
            // change styles to anything you want for selected nav option
            navOption.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        } else {
            navOption.style.backgroundColor = "unset";
        }
    }
}

updateNavFromHash();

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
    setTimeout(updateNavFromHash, 100);

    if (screen.width <= 1000) {
        links.style.display = "none";
    }
}