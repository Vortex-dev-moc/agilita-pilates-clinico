// Agilità Pilates Clínico — interações da home

// Header com sombra ao rolar
const header = document.querySelector("[data-header]");
const heroMedia = document.querySelector(".hero-media");
const whatsFloat = document.querySelector(".whats-float");
const mobile = window.matchMedia("(max-width: 860px)");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
  // No mobile, o botão flutuante só aparece depois da primeira dobra
  const inHero = heroMedia.getBoundingClientRect().bottom > window.innerHeight * 0.6;
  whatsFloat.classList.toggle("is-hidden", mobile.matches && inHero);
  updateFloatTheme();
};

// Botão do WhatsApp troca de cor conforme o fundo da seção que está atrás dele
function updateFloatTheme() {
  const r = whatsFloat.getBoundingClientRect();
  const behind = document
    .elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2)
    .find((el) => !whatsFloat.contains(el));
  whatsFloat.classList.toggle("on-dark", Boolean(behind && behind.closest(".team, .contact, .site-footer") && !behind.closest(".map-frame")));
}
mobile.addEventListener("change", onScroll);
window.addEventListener("resize", onScroll, { passive: true });
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Menu mobile
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Revelar elementos ao entrar na tela
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });
} else {
  items.forEach((el) => el.classList.add("is-visible"));
}

// Ano no rodapé
document.querySelector("[data-year]").textContent = new Date().getFullYear();
