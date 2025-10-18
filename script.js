    const menuToggle = document.getElementById("menu-icon-id");
    const sideBar = document.getElementById("sidebarSection");
    menuToggle.addEventListener("click", () => {
        sideBar.classList.toggle("open");
    });

    
    const btn = document.getElementById("home");
    const section = document.getElementById("section-1");
    btn.addEventListener("click", () => {
        section.classList.remove("section-1");
        section.classList.toggle("section-2");
    })

    const content = document.querySelectorAll(".label");
    content.forEach(cont => {
        content.addEventListener("click", function(){
            content.forEach(btn => btn.classList.remove("active"))
            this.classList.add("untive")
        })
        
    });




     function showSection(id) {
      // Hide all sections
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

      // Show selected section
      document.getElementById(id).classList.add('active');

      // Update header title
      document.getElementById('pageTitle').textContent = id.charAt(0).toUpperCase() + id.slice(1);

      // Highlight active menu
      document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
      event.target.classList.add('active');
    }