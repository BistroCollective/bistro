/* ── Shared site-wide JS (Bistro) ────────────────────────────── */

/* Side-menu open / close */
function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
}
function closeMenu() {
    document.getElementById("sideMenu").style.left = "-250px";
}

/* Close menu when clicking outside */
document.addEventListener('click', function (e) {
    var menu = document.getElementById('sideMenu');
    var hamburger = document.querySelector('.hamburger-btn');
    if (menu && hamburger &&
        menu.style.left === '0px' &&
        !menu.contains(e.target) &&
        !hamburger.contains(e.target)) {
        closeMenu();
    }
}, { passive: true });

/* Safari & cross-browser video autoplay fix */
document.addEventListener('DOMContentLoaded', function () {
    var vid = document.getElementById('bgVideo');
    if (!vid) return;

    /* Attempt autoplay – browsers may block it */
    var playPromise = vid.play();
    if (playPromise !== undefined) {
        playPromise.catch(function () {
            /* Autoplay blocked – resume on first user gesture */
            document.body.addEventListener('touchstart', function () { vid.play(); }, { once: true, passive: true });
            document.body.addEventListener('click', function () { vid.play(); }, { once: true, passive: true });
        });
    }

    /* Reduce power usage: pause video when tab is hidden */
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            vid.pause();
        } else {
            vid.play().catch(function () { /* ignore */ });
        }
    });
});

/* Remove splash screen from DOM after animation completes to free memory */
document.addEventListener('DOMContentLoaded', function () {
    var splash = document.getElementById('splashScreen');
    if (splash && splash.style.display !== 'none') {
        splash.addEventListener('animationend', function () {
            splash.remove();
        });
    }
});
