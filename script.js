function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = (Math.random() * 2 + 1) + "s";
        snowflake.style.opacity = Math.random();
        document.body.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 3000);
    }
}

createSnowflakes();

setTimeout(() => {
    document.getElementById("snow-pile").style.height = "100px"; // Simulate piled-up snow
}, 3000);

setTimeout(() => {
    document.getElementById("enter-button").style.display = "block";
}, 4000);
