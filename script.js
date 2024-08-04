var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade');
    const options = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, options);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}
