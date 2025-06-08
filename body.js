export function NavAnimation (){


 document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.scrollable");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60, // compensação da navbar
            behavior: "smooth"
          });
        }
      });
    });
  });

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll("a.scrollable");

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70; // Compensação da navbar
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active"); // Remover classe de todos
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active"); // Adiciona no link correto
      }
    });
  });
}