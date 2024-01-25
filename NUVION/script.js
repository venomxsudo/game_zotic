document.addEventListener("DOMContentLoaded", function () {
    const circleContainer = document.getElementById('circle-container');
    const circle = document.getElementById('circle');

    for (let i = 0; i < 360; i += 10) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const angle = i * (Math.PI / 180);
        const x = Math.cos(angle) * (circle.offsetWidth / 2) + circle.offsetLeft + circleContainer.offsetLeft;
        const y = Math.sin(angle) * (circle.offsetHeight / 2) + circle.offsetTop + circleContainer.offsetTop;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        circleContainer.appendChild(particle);
    }
});
