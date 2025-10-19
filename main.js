document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('orderNowButton');
    const heartContainer = document.getElementById('heart-container'); // Container for hearts

    button.addEventListener('click', (event) => {
        // Prevent default link behavior if not desired, or if it navigates
        // event.preventDefault(); 

        const buttonRect = button.getBoundingClientRect();

        // Create multiple hearts
        for (let i = 0; i < 5; i++) { // Generate 5 hearts per click
            const heart = document.createElement('span');
            heart.classList.add('heart');

            // Position hearts near the button, but allow for random dispersion
            // Using buttonRect to get the absolute position on the screen
            const startX = buttonRect.left + buttonRect.width / 2;
            const startY = buttonRect.top + buttonRect.height / 2;

            // Randomize initial position slightly
            heart.style.left = `${startX + (Math.random() - 0.5) * 40}px`;
            heart.style.top = `${startY + (Math.random() - 0.5) * 40}px`;


            // Randomize animation duration and delay for a natural look
            const duration = 1 + Math.random() * 1.5; // 1s to 2.5s
            const delay = Math.random() * 0.5; // 0s to 0.5s

            heart.style.animation = `floatUpAndFade ${duration}s ease-out ${delay}s forwards`;

            heartContainer.appendChild(heart); // Append to the container

            // Remove heart after animation finishes to prevent DOM clutter
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    });
});
