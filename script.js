// ===============================
// Mobile Navigation Toggle
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // ===============================
    // Contact Form (demo)
    // ===============================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // ===============================
    // Modal for Video
    // ===============================
    const modal = document.getElementById("videoModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");
    const demoVideo = document.getElementById("demoVideo");

    // ✅ Function to open modal
    function openModal() {
        if (modal) {
            modal.style.display = "flex";
        }
        if (demoVideo) {
            demoVideo.play();
        }
    }

    // ✅ Function to close modal
    function closeModal() {
        if (modal) {
            modal.style.display = "none";
        }
        if (demoVideo) {
            demoVideo.pause();
        }
    }

    // ✅ Open modal when clicking the open button
    if (openBtn) {
        openBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openModal();
        });
    }

    // ✅ Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            closeModal();
        });
    }

    // ✅ Close modal when clicking outside modal content
    if (modal) {
        window.addEventListener("click", function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ✅ Close modal when pressing the Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeModal();
        }
    });
});
