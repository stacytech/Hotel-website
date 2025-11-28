
(function() {
    const nav = document.getElementById('desktop-nav');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;


    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });


    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

   
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

 
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
})();
