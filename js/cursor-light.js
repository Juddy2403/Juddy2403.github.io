document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img.zoom-on-hover').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            document.getElementById('modal-img').src = this.src;
            document.getElementById('img-modal').style.display = 'flex';
        });
    });
    document.getElementById('close-modal').onclick = function() {
        document.getElementById('img-modal').style.display = 'none';
    };
});

// Existing cursor-light code...
const light = document.getElementById('cursor-light');
light.style.position = 'fixed';
light.style.top = 0;
light.style.left = 0;
light.style.width = '100vw';
light.style.height = '100vh';
light.style.pointerEvents = 'none';
light.style.zIndex = -1;

document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    light.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
            rgba(207,163,243,0.1) 0px,
            rgba(207,163,243,0.03) 100px,
            rgba(255,255,255,0.0) 200px)
    `;
});

// js/cursor-light.js or a new file
document.querySelectorAll('.zoom-on-hover').forEach(img => {
    img.addEventListener('click', function(e) {
        const modal = document.getElementById('img-modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'flex';
        modalImg.src = img.src;

        // Get image position and size
        const rect = img.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const imgCenterX = rect.left + rect.width / 2;
        const imgCenterY = rect.top + rect.height / 2;

        // Calculate translation
        const translateX = - centerX + imgCenterX;
        const translateY = - centerY + imgCenterY;

        // Set initial transform to match clicked image
        modalImg.style.transition = 'none';
        modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${rect.width / modalImg.width})`;

        // Animate to center and scale up
        setTimeout(() => {
            modalImg.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            modalImg.style.transform = 'translate(0,0) scale(1)';
        }, 10);
    });
});

