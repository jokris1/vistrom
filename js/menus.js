const menus = {
    toggleMenu() {        
        const menu = document.querySelector(".nav-top");
        const menuItems = document.querySelectorAll(".nav-top ul li");
        const hamburger = document.querySelector(".hamburger");
        const closeIcon= document.querySelector(".closeIcon");
        const menuIcon = document.querySelector(".menuIcon");

        if (menu.classList.contains("showMenu")) {
            // hide menu
            hamburger.classList.remove("hamburger-active")
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        } else {
            // show menu
            hamburger.classList.add("hamburger-active")
            menu.classList.add("showMenu");
        }

        // add event listener to ham button
        hamburger.addEventListener("click", menus.toggleMenu);

        // when menu item clicked, close menu
        menuItems.forEach( 
            function(menuItem) { 
                menuItem.addEventListener("click", menus.toggleMenu);
            }
        )
    }
}

export default menus;





