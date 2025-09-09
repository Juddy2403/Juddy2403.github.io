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
            rgba(207,163,243,0.15) 0px,
            rgba(207,163,243,0.05) 100px,
            rgba(255,255,255,0.0) 200px)
    `;
});