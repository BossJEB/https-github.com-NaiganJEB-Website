const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('nav ul');

navToggle.addEventListener('change', function () {
    navList.classList.toggle('show', this.checked);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active-section');
        });

        targetSection.classList.add('active-section');

        if (window.innerWidth <= 600) {
            navList.classList.remove('show');
            navToggle.checked = false;
        }
    });
});
