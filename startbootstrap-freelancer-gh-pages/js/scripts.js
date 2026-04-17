/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    let lastScrollY = window.scrollY;

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

        if (window.scrollY <= 10 || window.scrollY < lastScrollY) {
            navbarCollapsible.classList.remove('navbar-hidden');
        } else {
            navbarCollapsible.classList.add('navbar-hidden');
        }
        lastScrollY = window.scrollY;

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse each responsive navbar when its toggler is visible
    const navbars = [
        { toggler: '.navbar-toggler[data-bs-target="#navbarResponsive"]', links: '#navbarResponsive .nav-link' },
        { toggler: '.navbar-toggler[data-bs-target="#topNavbarResponsive"]', links: '#topNavbarResponsive .nav-link' },
    ];
    navbars.forEach(function (navConfig) {
        const navbarToggler = document.body.querySelector(navConfig.toggler);
        if (!navbarToggler) {
            return;
        }
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll(navConfig.links)
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    });

});
