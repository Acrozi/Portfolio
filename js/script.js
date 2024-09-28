document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    const contentContainer = document.getElementById('content-container');
    const profile = document.getElementById('profile');
    const menuItems = document.querySelectorAll('.menu-links a');

    function toggleMenu() {
        hamburgerIcon.classList.toggle('open');
        menuLinks.classList.toggle('open');
        contentContainer.classList.toggle('menu-open');
        profile.classList.toggle('menu-open');

        // Visa eller dölja menyn baserat på om 'open' klassen finns
        if (menuLinks.classList.contains('open')) {
            menuLinks.style.display = 'block'; // Visa menyn
        } else {
            menuLinks.style.display = 'none'; // Dölja menyn
        }
    }

    hamburgerIcon.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (menuLinks.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});
