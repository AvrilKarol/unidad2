document.addEventListener("DOMContentLoaded", () => {
  const certs = document.querySelectorAll(".cert-card small");

  certs.forEach((detalle) => {
    detalle.style.display = "none";

    detalle.parentElement.addEventListener("click", () => {
      detalle.style.display =
        detalle.style.display === "none" ? "block" : "none";
    });
  });
});
