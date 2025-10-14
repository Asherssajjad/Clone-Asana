    const menuToggle = document.getElementById("menu-icon-id");
    const sideBar = document.getElementById("sidebarSection");
    menuToggle.addEventListener("click", () => {
        sideBar.classList.toggle("open");
    });
