function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const contentContainer = document.getElementById('content-container');
    const profile = document.getElementById('profile');

    // Växla klassen för att öppna/stänga menyn
    menuLinks.classList.toggle('open');
    contentContainer.classList.toggle('menu-open'); // Lägger till/removerar klassen för innehållet
    profile.classList.toggle('menu-open'); // Lägger till/removerar klassen för profilsektionen

    // Visa eller dölja menyn baserat på om 'open' klassen finns
    if (menuLinks.classList.contains('open')) {
        menuLinks.style.display = 'block'; // Visa menyn
    } else {
        menuLinks.style.display = 'none'; // Dölja menyn
    }
}
