"use strict";

{
  let idleTimer;

  function cambiarFondo() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  function resetInactividad() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(cambiarFondo, 10000); // 10 segundos
  }

  // Tu doble click (igual, pero reutilizando la función)
  document.addEventListener("dblclick", () => {
    cambiarFondo();
    resetInactividad(); // opcional, pero recomendable
  });

  // Actividad que reinicia el contador
  ["mousemove", "keydown", "scroll", "click", "touchstart"].forEach((ev) => {
    document.addEventListener(ev, resetInactividad, { passive: true });
  });

  // Arranca el contador desde el inicio
  resetInactividad();
}
