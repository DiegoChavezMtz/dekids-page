(() => {
  function initializeAnnouncement(section) {
    if (!section) return () => undefined;

    const countdown = section.querySelector("[data-countdown]");
    const target = new Date(section.dataset.countdownTarget ?? "").getTime();
    let interval;
    if (countdown && Number.isFinite(target)) {
      const fields = ["days", "hours", "minutes", "seconds"].map((name) =>
        countdown.querySelector(`[data-${name}]`),
      );
      const update = () => {
        const remaining = Math.max(0, target - Date.now());
        const values = [
          Math.floor(remaining / 86_400_000),
          Math.floor((remaining % 86_400_000) / 3_600_000),
          Math.floor((remaining % 3_600_000) / 60_000),
          Math.floor((remaining % 60_000) / 1_000),
        ];
        fields.forEach((field, index) => {
          if (field) field.textContent = String(values[index]).padStart(2, "0");
        });
      };
      update();
      interval = window.setInterval(update, 1_000);
    }

    const visual = section.querySelector(".dekids-antigravity__visual");
    const image = visual?.querySelector("img");
    const title = section.querySelector("h2");
    const stopCountdown = () => window.clearInterval(interval);
    if (!visual || !image || !title || !countdown) return stopCountdown;

    const precisePointer = matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    let currentX = 28;
    let currentY = 0;
    let targetX = 28;
    let targetY = 0;
    let currentScale = 1;
    let targetScale = 1;
    let currentAway = 0;
    let frame = 0;
    const textZone = () => {
      const titleBounds = title.getBoundingClientRect();
      const timerBounds = countdown.getBoundingClientRect();
      return {
        left: Math.min(titleBounds.left, timerBounds.left) - 28,
        right: Math.max(titleBounds.right, timerBounds.right) + 28,
        top: Math.min(titleBounds.top, timerBounds.top) - 22,
        bottom: Math.max(titleBounds.bottom, timerBounds.bottom) + 22,
        laneY: (titleBounds.bottom + timerBounds.top) * 0.5,
      };
    };
    const distanceToZone = (x, y, zone) =>
      Math.hypot(Math.max(zone.left - x, 0, x - zone.right), Math.max(zone.top - y, 0, y - zone.bottom));
    const render = () => {
      currentX += (targetX - currentX) * 0.105;
      currentY += (targetY - currentY) * 0.105;
      currentScale += (targetScale - currentScale) * (targetScale < currentScale ? 0.16 : 0.11);
      const distanceFromOrigin = Math.hypot(currentX - 28, currentY);
      const awayGoal = Math.max(0, Math.min(1, (distanceFromOrigin - 48) / 260 + (1 - currentScale) * 0.42));
      currentAway += (awayGoal - currentAway) * 0.13;
      visual.style.setProperty("--ag-x", `${currentX.toFixed(2)}px`);
      visual.style.setProperty("--ag-y", `${currentY.toFixed(2)}px`);
      visual.style.setProperty("--ag-rotate", `${((currentX - 28) * 0.007).toFixed(3)}deg`);
      visual.style.setProperty("--ag-scale", currentScale.toFixed(4));
      visual.style.setProperty("--ag-away", currentAway.toFixed(4));
      if (Math.abs(targetX - currentX) > 0.08 || Math.abs(targetY - currentY) > 0.08 || Math.abs(targetScale - currentScale) > 0.001 || Math.abs(awayGoal - currentAway) > 0.002) frame = requestAnimationFrame(render);
      else frame = 0;
    };
    const moveTo = (x, y, scale) => {
      targetX = x;
      targetY = y;
      targetScale = scale;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onPointerMove = (event) => {
      if (!precisePointer.matches || reducedMotion.matches || event.pointerType === "touch" || !image.offsetWidth) return;
      const bounds = section.getBoundingClientRect();
      const normalizedY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
      const imageLeft = image.offsetLeft;
      const desiredX = event.clientX - bounds.left - imageLeft - image.offsetWidth * 0.5;
      const safeX = Math.max(-imageLeft + 18, Math.min(bounds.width - imageLeft - image.offsetWidth - 18, desiredX));
      const imageBounds = image.getBoundingClientRect();
      const minY = bounds.top - (imageBounds.top - currentY) + 16;
      const maxY = bounds.bottom - (imageBounds.bottom - currentY) - 16;
      let safeY = Math.max(minY, Math.min(maxY, normalizedY * 78));
      const zone = textZone();
      const centerX = imageBounds.left + imageBounds.width * 0.5 + safeX - currentX;
      let centerY = imageBounds.top + imageBounds.height * 0.5 + safeY - currentY;
      if (centerX > zone.left && centerX < zone.right && centerY > zone.top - 140 && centerY < zone.bottom + 140) {
        safeY = Math.max(minY, Math.min(maxY, safeY + zone.laneY - centerY));
        centerY = imageBounds.top + imageBounds.height * 0.5 + safeY - currentY;
      }
      const progress = Math.max(0, Math.min(1, distanceToZone(centerX, centerY, zone) / 175));
      moveTo(safeX, safeY, 0.1 + 0.9 * progress * progress * (3 - 2 * progress));
    };
    const onPointerLeave = () => {
      if (frame || currentX !== 28 || currentY !== 0 || currentScale !== 1) moveTo(28, 0, 1);
    };
    const resetMotion = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      currentX = targetX = 28;
      currentY = targetY = currentAway = 0;
      currentScale = targetScale = 1;
      for (const property of ["--ag-x", "--ag-y", "--ag-rotate", "--ag-scale", "--ag-away"]) {
        visual.style.removeProperty(property);
      }
    };
    reducedMotion.addEventListener("change", resetMotion);
    section.addEventListener("pointermove", onPointerMove, { passive: true });
    section.addEventListener("pointerleave", onPointerLeave, { passive: true });
    return () => {
      stopCountdown();
      reducedMotion.removeEventListener("change", resetMotion);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      resetMotion();
    };
  }

  let currentSection = null;
  let dispose = null;
  function syncAnnouncement() {
    const section = document.querySelector(".landing [data-dekids-antigravity]");
    if (section === currentSection) return;
    dispose?.();
    currentSection = section;
    dispose = section ? initializeAnnouncement(section) : null;
  }

  // El script puede cargar antes del marcado o seguir activo al cambiar de ruta.
  const observer = new MutationObserver((records) => {
    if (records.some(({ addedNodes, removedNodes }) =>
      [...addedNodes, ...removedNodes].some((node) => node.nodeType === Node.ELEMENT_NODE),
    )) syncAnnouncement();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  syncAnnouncement();
})();
