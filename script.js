const c = document.getElementById("net"),
ctx = c.getContext("2d");
let W,
H,
particles = [],
mouse = { x: null, y: null };
function resize() {
W = c.width = innerWidth;
H = c.height = innerHeight;
}
addEventListener("resize", resize);
resize();
addEventListener("mousemove", (e) => {
mouse.x = e.clientX;
mouse.y = e.clientY;
});

const N = 120; // number of particles (tune for perf)
for (let i = 0; i < N; i++) {
particles.push({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() * 2 - 1) * 0.6,
    vy: (Math.random() * 2 - 1) * 0.6,
    r: 1.5 + Math.random() * 1.2,
});
}

function step() {
ctx.clearRect(0, 0, W, H);
  // nodes
ctx.fillStyle = "rgba(255, 0, 0, 1)";
particles.forEach((p) => {
    // slight attraction to mouse
    if (mouse.x != null) {
        const dx = mouse.x - p.x,
        dy = mouse.y - p.y,
        d = Math.hypot(dx, dy);
        if (d < 160) {
        p.vx += (dx / d) * 0.005;
        p.vy += (dy / d) * 0.005;
        }
    }
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
});
  // lines
for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        const a = particles[i],
        b = particles[j];
        const dx = a.x - b.x,
        dy = a.y - b.y,
        d = dx * dx + dy * dy;
      if (d < 130 * 130) {
        const alpha = 1 - d / (130 * 130);
        ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        }
    }
}
requestAnimationFrame(step);
}
step();
