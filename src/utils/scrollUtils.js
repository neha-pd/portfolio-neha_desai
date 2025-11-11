// Smooth scrolling utility
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Scroll spy utility
export function updateActiveSection(sectionIds, setActiveSection) {
  let found = false;
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        setActiveSection(id);
        found = true;
        break;
      }
    }
  }
  if (!found) {
    setActiveSection('home');
  }
}