const snowContainer = document.getElementById("snowContainer");
const numSnowflakes = 100;  // Number of snowflakes

// Create an array to track snowflake positions
let snowflakesAtBottom = [];

// Generate random snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';  // The snowflake symbol

    const size = Math.random() * 10 + 10; // Random size between 10 and 20px
    snowflake.style.fontSize = `${size}px`;

    // Start snowflakes at random positions
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.top = `-20px`; // Start above the screen

    snowContainer.appendChild(snowflake);

    // Animate the falling snowflakes
    let snowflakePosition = 0;
    const fallSpeed = Math.random() * 2 + 2; // Random fall speed

    function animateSnowflake() {
        snowflakePosition += fallSpeed;
        snowflake.style.top = `${snowflakePosition}px`;

        // If it reaches the bottom, stack it
        if (snowflakePosition >= window.innerHeight - size) {
            snowflakePosition = window.innerHeight - size; // Stop at the bottom
            snowflake.style.top = `${snowflakePosition}px`;

            // Add snowflake to the pile at the bottom
            snowflakesAtBottom.push(snowflake);

            // If enough snowflakes have accumulated, start melting
            if (snowflakesAtBottom.length >= 3) {
                meltSnowflakes();
            }
        }

        // Repeat the animation
        if (snowflakePosition < window.innerHeight) {
            requestAnimationFrame(animateSnowflake);
        } else {
            // Remove snowflake after it's out of view (optional)
            snowContainer.removeChild(snowflake);
        }
    }

    animateSnowflake();
}

// Melting function that removes snowflakes from the pile in groups of 3
function meltSnowflakes() {
    // After accumulating 3 snowflakes, "melt" them by fading out
    const groupToMelt = snowflakesAtBottom.splice(0, 3); // Get the first 3 snowflakes

    groupToMelt.forEach((snowflake, index) => {
        snowflake.style.transition = "opacity 2s"; // Add a fading effect
        snowflake.style.opacity = 0; // Fade out the snowflakes

        // Remove them from the DOM after the fade
        setTimeout(() => {
            snowContainer.removeChild(snowflake);
        }, 2000); // 2 seconds after fading out
    });
}

// Generate snowflakes
for (let i = 0; i < numSnowflakes; i++) {
    createSnowflake();
}
