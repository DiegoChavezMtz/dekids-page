"use client";

import { useEffect } from "react";

export function AntiGravityInteractions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".antiGravity");
    if (!root) return;

    const cards = [...root.querySelectorAll<HTMLElement>(".price-card")];
    const today = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Mexico_City",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
    const active = cards.find((card) => today >= (card.dataset.start ?? "") && today <= (card.dataset.end ?? ""));

    if (active) {
      active.classList.add("active");
      const tier = active.querySelector(".price-top > span")?.textContent;
      const price = active.querySelector("strong")?.textContent?.trim();
      const status = root.querySelector("#price-status");
      if (status && tier && price) status.textContent = `Hoy está vigente: ${tier} · ${price}`;
    }

    const host = root.querySelector<HTMLElement>(".video-host-stage");
    const video = host?.querySelector<HTMLVideoElement>("video");
    const play = host?.querySelector<HTMLButtonElement>(".video-card-play");
    const close = host?.querySelector<HTMLButtonElement>(".video-modal-close");
    if (!host || !video || !play || !close) return;

    let hostPlaceholder: Comment | null = null;
    let modalLayer: HTMLDivElement | null = null;

    const restoreHost = () => {
      if (hostPlaceholder?.parentNode) hostPlaceholder.replaceWith(host);
      modalLayer?.remove();
      hostPlaceholder = null;
      modalLayer = null;
    };

    const closeVideo = (advance = false) => {
      video.pause();
      video.controls = false;
      video.currentTime = 0;
      // Restituye el poster del prototipo en vez de conservar el primer frame
      // del video al volver a la tarjeta.
      video.load();
      host.classList.remove("is-expanded");
      restoreHost();
      root.classList.remove("video-open");
      play.focus({ preventScroll: true });
      if (advance) root.querySelector("#ideas")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Garantiza que la tarjeta inicial muestre el poster aun si el navegador
    // ya había precargado el primer fotograma del MP4.
    video.load();
    const openVideo = () => {
      // La sección que contiene el video crea su propio stacking context. Al
      // montar el modal directamente bajo body, ningún bloque de la landing
      // puede dibujarse encima del reproductor.
      hostPlaceholder = document.createComment("anti-gravedad-video-placeholder");
      host.parentNode?.insertBefore(hostPlaceholder, host);
      modalLayer = document.createElement("div");
      modalLayer.className = "antiGravity antiGravityModal";
      Object.assign(modalLayer.style, {
        position: "fixed",
        inset: "0",
        zIndex: "2147483647",
        background: "#110023",
      });
      modalLayer.append(host);
      document.body.append(modalLayer);
      host.classList.add("is-expanded");
      root.classList.add("video-open");
      video.controls = true;
      void video.play().catch(() => undefined);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && host.classList.contains("is-expanded")) closeVideo();
    };

    play.addEventListener("click", openVideo);
    close.addEventListener("click", () => closeVideo());
    video.addEventListener("ended", () => closeVideo(true));
    document.addEventListener("keydown", onKeyDown);
    return () => {
      restoreHost();
      play.removeEventListener("click", openVideo);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
