(function () {
  "use strict";

  // ---------- Ambient particle field ----------
  var canvas = document.getElementById("ambient-canvas");
  var ctx = canvas.getContext("2d");
  var particles = [];
  var defaultColor = { r: 217, g: 180, b: 106 }; // gold
  var currentColor = { r: 217, g: 180, b: 106 };
  var targetColor = { r: 217, g: 180, b: 106 };

  function hexToRgb(hex) {
    var v = parseInt(hex.replace("#", ""), 16);
    return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function makeParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 1.8,
      vy: -(0.08 + Math.random() * 0.18),
      vx: (Math.random() - 0.5) * 0.12,
      alpha: 0.15 + Math.random() * 0.35
    };
  }
  for (var i = 0; i < 90; i++) particles.push(makeParticle());

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    currentColor.r = lerp(currentColor.r, targetColor.r, 0.03);
    currentColor.g = lerp(currentColor.g, targetColor.g, 0.03);
    currentColor.b = lerp(currentColor.b, targetColor.b, 0.03);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + (currentColor.r | 0) + "," + (currentColor.g | 0) + "," + (currentColor.b | 0) + "," + p.alpha + ")";
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // ---------- Airscream capsule showcase ----------
  var experience = document.getElementById("airscream-experience");
  var panel = document.getElementById("glass-panel");
  var panelName = document.getElementById("panel-name");
  var panelNotes = document.getElementById("panel-notes");
  var panelPrice = document.getElementById("panel-price");
  var capsules = document.querySelectorAll(".capsule");

  var smokeTimers = new WeakMap();

  function spawnPuff(layer) {
    var puff = document.createElement("span");
    puff.className = "puff";
    puff.style.left = "0px";
    puff.style.setProperty("--drift", (Math.random() * 40 - 20) + "px");
    layer.appendChild(puff);
    puff.addEventListener("animationend", function () {
      puff.remove();
    });
  }

  capsules.forEach(function (capsule) {
    var color = getComputedStyle(capsule).getPropertyValue("--flavor-color").trim();
    var smokeLayer = capsule.querySelector(".smoke-layer");

    capsule.addEventListener("mouseenter", function () {
      experience.classList.add("active");
      capsules.forEach(function (c) { c.classList.remove("is-hovered"); });
      capsule.classList.add("is-hovered");

      experience.style.setProperty("--wash-color", color);
      document.documentElement.style.setProperty("--wash-color", color);
      targetColor = hexToRgb(color);

      panelName.textContent = capsule.dataset.name;
      panelName.style.color = color;
      panelNotes.textContent = capsule.dataset.notes;
      panelPrice.textContent = capsule.dataset.price;
      panel.classList.add("visible");

      var timer = setInterval(function () { spawnPuff(smokeLayer); }, 220);
      smokeTimers.set(capsule, timer);
    });

    capsule.addEventListener("mouseleave", function () {
      capsule.classList.remove("is-hovered");
      var timer = smokeTimers.get(capsule);
      if (timer) { clearInterval(timer); smokeTimers.delete(capsule); }
    });
  });

  experience.addEventListener("mouseleave", function () {
    experience.classList.remove("active");
    panel.classList.remove("visible");
    targetColor = defaultColor;
  });
})();
