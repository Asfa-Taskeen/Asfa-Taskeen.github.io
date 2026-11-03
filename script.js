const roles = ["Cybersecurity", "Software Development", "Python Projects", "Network Security"];
const roleElement = document.getElementById("rotatingRole");
let roleIndex = 0;
if (roleElement) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.classList.add("changing");
    setTimeout(() => {
      roleElement.textContent = roles[roleIndex];
      roleElement.classList.remove("changing");
    }, 180);
  }, 2300);
}
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();