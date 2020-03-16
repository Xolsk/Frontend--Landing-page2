window.onload = () => {
    document.getElementById("burger").addEventListener("click", toggleNav);
    window.addEventListener('resize', checkSize);
    showNav = false;
}

toggleNav = () => {

    showNav = !showNav;


    if (showNav === true) {
        document.getElementById("options").style.display = "flex";
        document.getElementById("options").style.animation = "0.2s 1 pop"
        document.getElementById("burgerContainer").style.backgroundColor = "rgb(64,64,155)";
        document.getElementById("burger").style.animation="0.2s 1 burgerFade";
        document.getElementById("burger").style.backgroundColor="rgb(191,191,100)";
    }
    else {
        document.getElementById("options").style.animation = "0.2s 1 popout";
        document.getElementById("burger").style.animation="0.2s 1 burgerFadeOut";
        setTimeout(()=>{
            document.getElementById("options").style.display = "none";
            document.getElementById("burger").style.backgroundColor="white";
            document.getElementById("burgerContainer").style.backgroundColor = "transparent";

            document.getElementById("burgerContainer").style.borderBottom = "none"},100)


    }

}

checkSize = () => {
    let currentWidth = window.innerWidth;
    if (currentWidth >= 821) {
        showNav = false;
        document.getElementById("options").style.display = "none";
        document.getElementById("burgerContainer").style.backgroundColor = "transparent";
        document.getElementById("burgerContainer").style.borderBottom = "none";
        document.getElementById("burger").removeAttribute("style");
    }
}




