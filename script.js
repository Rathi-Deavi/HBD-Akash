const canvas = document.getElementById("spores");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let spores = [];
for (let i = 0; i < 160; i++) {
    spores.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.6 + 0.2
    });
}

function animateSpores() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    spores.forEach(s => {
        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,200,200,0.18)";
        ctx.fill();
    });

    requestAnimationFrame(animateSpores);
}
animateSpores();

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    intro.style.opacity = 0;
    setTimeout(() => {
        intro.style.display = "none";
        main.classList.remove("hidden");
        music.volume = 0.4;
        music.play();
    }, 800);
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
    document.getElementById("gift").classList.remove("hidden");
});
