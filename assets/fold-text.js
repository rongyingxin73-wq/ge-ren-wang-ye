/**
 * FoldText — Vanilla JS version
 * Splits text into characters and animates each char with a 3D top-hinge fold.
 * Designed to mimic the React component API from the reference snippet.
 */
(function () {
  function initFoldText() {
    document.querySelectorAll(".fold-text").forEach((el) => {
      const text = el.dataset.text || el.textContent.trim();
      const hinge = el.dataset.hinge || "top";
      const trigger = el.dataset.trigger || "scroll";
      const duration = parseFloat(el.dataset.duration) || 0.65;
      const stagger = parseFloat(el.dataset.stagger) || 0.045;
      const ease = el.dataset.ease || "power3.out";
      const perspective = parseInt(el.dataset.perspective) || 700;
      const crease = parseFloat(el.dataset.creaseShading);
      const creaseShading = Number.isNaN(crease) ? 0.55 : crease;

      // Apply container styles
      el.style.fontSize = el.dataset.fontSize || "inherit";
      el.style.fontWeight = el.dataset.fontWeight || "inherit";
      el.style.color = el.dataset.color || "inherit";
      el.style.perspective = `${perspective}px`;
      el.style.transformStyle = "preserve-3d";
      el.style.display = "block";
      el.style.lineHeight = "1.05";
      el.innerHTML = "";

      const chars = Array.from(text);
      chars.forEach((ch) => {
        const charWrap = document.createElement("span");
        charWrap.className = "fold-char";
        charWrap.style.transformOrigin = `${hinge} center`;

        const face = document.createElement("span");
        face.className = "fold-face";
        face.textContent = ch === " " ? "\u00A0" : ch;

        const shade = document.createElement("span");
        shade.className = "fold-shade";
        shade.style.background = `linear-gradient(to bottom, rgba(0,0,0,${creaseShading}), transparent 72%)`;

        charWrap.appendChild(face);
        charWrap.appendChild(shade);
        el.appendChild(charWrap);
      });

      const targets = el.querySelectorAll(".fold-char");
      const shades = el.querySelectorAll(".fold-shade");

      function animate() {
        gsap.fromTo(
          targets,
          { rotateX: -90, opacity: 0, y: -18 },
          {
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease,
          }
        );
        gsap.fromTo(
          shades,
          { opacity: creaseShading },
          {
            opacity: 0,
            duration,
            stagger,
            ease,
          }
        );
      }

      if (trigger === "scroll" && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: animate,
        });
      } else if (trigger === "scroll" && typeof gsap !== "undefined") {
        // Fallback if ScrollTrigger plugin isn't loaded: animate on load
        animate();
      } else {
        animate();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFoldText);
  } else {
    initFoldText();
  }
})();
