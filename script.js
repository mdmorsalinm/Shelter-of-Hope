var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade'); // Select all elements with the ID 'fade'
    const options = {
        threshold: 0.2,
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

    const donateBtns = document.querySelectorAll('.donate-btn');
    const donationForm = document.getElementById('donation-form');
    const closeBtn = document.querySelector('.close-btn');
    const donationLink = document.getElementById('donationLink');
    const donateForm = document.getElementById('donateForm');

    donateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const link = btn.getAttribute('data-link');
            donationLink.href = link;
            donationForm.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        donationForm.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === donationForm) {
            donationForm.style.display = 'none';
        }
    });

    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(donateForm);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            donationAmount: formData.get('donationAmount'),
            proofOfDonation: formData.get('proofOfDonation')
        };
        
        console.log(data);  // Replace this with actual form submission logic (e.g., AJAX request)
        donationForm.style.display = 'none';
        donateForm.reset();
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}