function sayYes() {
    fireCrackers();

    setTimeout(() => {
        document.getElementById("card").innerHTML = `
            <h1>YAYYY 💖🥰</h1>
            <p style="font-size:18px;margin-top:20px;">
                You just made me the happiest person ❤️
            </p>
        `;
    }, 900);
}


function sayNo() {
    document.querySelector(".card").innerHTML = `
        <h1>Not even an option, love 😌💘</h1>
        <div class="buttons">
            <button class="yes" onclick="sayYes()">Yes 💖</button>
        </div>
    `;
}

function fireCrackers() {
    const totalBursts = 40;          // number of firework explosions
    const sparklesPerBurst = 100;

    for (let b = 0; b < totalBursts; b++) {
        setTimeout(() => {
            createRandomBurst();
        }, Math.random() * 1200);
    }

    function createRandomBurst() {
        const xCenter = Math.random() * window.innerWidth;
        const yCenter = Math.random() * window.innerHeight;

        for (let i = 0; i < sparklesPerBurst; i++) {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300;

            sparkle.style.left = xCenter + "px";
            sparkle.style.top = yCenter + "px";
            sparkle.style.setProperty("--x", Math.cos(angle) * distance + "px");
            sparkle.style.setProperty("--y", Math.sin(angle) * distance + "px");

            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 2000);
        }
    }
}

const images = [
    "images/pic1.jpg",
    "images/pic2.jpeg",
    "images/pic3.jpeg",
    "images/pic4.jpeg",
    "images/pic5.jpeg",
    "images/pic6.jpeg",
    "images/pic7.jpg",
    "images/pic8.jpg"
];

const collage = document.querySelector(".collage");

images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    const size = 180 + Math.random() * 160;
    img.style.width = size + "px";

    img.style.top = Math.random() * 100 + "%";
    img.style.left = Math.random() * 100 + "%";
    img.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 30 - 15}deg)`;

    collage.appendChild(img);
});
