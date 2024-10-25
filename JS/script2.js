const skills = document.querySelectorAll('#skills .icon-text');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skills.forEach(s => {
            if (s !== skill) {
                s.style.opacity = '0.3';
            }
        });
        skill.style.opacity = '1';
    });

    skill.addEventListener('mouseout', () => {
        skills.forEach(s => {
            s.style.opacity = '1';
        });
    });
});
