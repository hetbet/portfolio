// CONSIDER IMPLEMENTING CHECK FOR HASH IN URL AND CHANGE COLOUR OF NAV OPTION
var links = document.getElementById("nav");

// UPDATE Nav if HASH IN URL - Keep selected anchor white if hovering over nav
function updateNavFromHash() {
    const navOptions = links.getElementsByTagName("a");

    for (const navOption of navOptions) {
        if (location.hash && navOption.href.endsWith(location.hash)) {
            // change styles to anything you want for selected nav option
            navOption.style.color = "#fff";
            console.log(navOption);
        }
    }
}

// RUN FUNCTIONS
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

    // IF screen width is lower or equal to 1000px - HIDE burger menu
    
    
}