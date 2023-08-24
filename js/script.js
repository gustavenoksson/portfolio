const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");
const imageContainers = document.querySelectorAll(".project-img-container")

const timelineSvg = document.querySelector(".timeline-svg");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentSectionId = entry.target.id;
      navItems.forEach(navItem => {
        const navItemId = navItem.getAttribute("href").substring(1);
        if (navItemId === currentSectionId) {
          navItem.classList.add("nav-active");
          if(navItemId === "projects") {
            timelineSvg.classList.add("timeline-animate");
          }
        } else {
          navItem.classList.remove("nav-active");
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});


const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('active-img');
      } else {
        entry.target.classList.remove('active-img');
      }
  });
}, { threshold: 1 });

imageContainers.forEach(container => {
  projectsObserver.observe(container);
});



