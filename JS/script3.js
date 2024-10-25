document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in');
    let delay = 0;

    sections.forEach((section) => {
        section.style.opacity = 0; 
        setTimeout(() => {
            section.style.opacity = 1; 
        }, delay);
        delay += 500; 
    });
});
