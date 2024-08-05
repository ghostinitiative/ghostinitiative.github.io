function glitchEffect() {
    const glitchLayers = document.querySelectorAll('.glitch');
    
    setInterval(() => {
        glitchLayers.forEach(layer => {
            const randomTranslateX = Math.random() * 20 - 10; // -10 to 10
            const randomTranslateY = Math.random() * 20 - 10; // -10 to 10
            const randomOpacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5

            layer.style.transform = `translate(${randomTranslateX}px, ${randomTranslateY}px)`;
            layer.style.opacity = randomOpacity;

            setTimeout(() => {
                layer.style.opacity = 0;
            }, 1000); // Increase the timeout to slow down the disappearance of the glitch
        });
    }, 1000); // Increase the interval to slow down the glitch effect frequency
}

document.addEventListener('DOMContentLoaded', glitchEffect);