// set current year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.innerHTML = currentYear;

// make the mobile nav bar works

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEL = document.querySelector('.header');
btnNavEl.addEventListener('click', () => {
    headerEL.classList.toggle('nav-open');
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);

            sectionEl.scrollIntoView({
                behavior: 'smooth',
            });
        }
        // close mobile navigation
        if (link.classList.contains('main-nav-link')) {
            headerEL.classList.toggle('nav-open');
        }
    });
});

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
            document.querySelector('.header').classList.add('sticky');
        }
    },
    {
        // in the viewport
        root: null,
        threshold: 0,
    }
);
obs.observe(sectionHeroEl);
