// Sidebar toggle
const menuToggle = document.getElementById("menu-icon-id");
const sideBar = document.getElementById("sidebarSection");

if (menuToggle && sideBar) {
  menuToggle.addEventListener("click", () => {
    sideBar.classList.toggle("open");
  });
}

// Active label toggle
const content = document.querySelectorAll(".label");
content.forEach(cont => {
  cont.addEventListener("click", function() {
    content.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
  });
});


// Sidebar links
const linking = document.querySelectorAll('.sidebar-link');
const sections = document.querySelectorAll('.content-section');

linking.forEach(link => {
  link.addEventListener('click', () => {
    console.log('asher');

    const target = link.getAttribute('data-section');

    sections.forEach(section => section.classList.remove('activeSection'));

    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.classList.add('activeSection');
    }
  });
});


const date = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };
const formatted = date.toLocaleDateString("en-US", options);
document.getElementById("date").textContent = formatted;

