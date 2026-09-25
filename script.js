(function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      const open = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const helloBtn = document.getElementById("hello-btn");
  const helloMsg = document.getElementById("hello-msg");
  if (helloBtn && helloMsg) {
    helloBtn.addEventListener("click", function () {
      helloMsg.textContent = "Future Projects will be placed here.";
    });
  }

  const form = document.getElementById("contact-form");
  const formOk = document.getElementById("form-ok");
  const again = document.getElementById("send-again");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
      const subject = encodeURIComponent("Message from " + name + " — ROGER COUCH");
      const body = encodeURIComponent(message + "\n\n— " + name + "\n" + email);
      window.location.href = "mailto:Couch.Roger@outlook.com?subject=" + subject + "&body=" + body;
      form.classList.add("hidden");
      if (formOk) formOk.classList.add("show");
    });
  }
  if (again && form && formOk) {
    again.addEventListener("click", function () {
      formOk.classList.remove("show");
      form.classList.remove("hidden");
    });
  }

  const THEME_KEY = "jizzle-theme";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "alt") document.documentElement.dataset.theme = "alt";
  updateShadeLabel();

  document.addEventListener("keydown", function (e) {
    const tag = e.target && e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key.toLowerCase() !== "t") return;
    const next = document.documentElement.dataset.theme === "alt" ? "base" : "alt";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    updateShadeLabel();
  });

  function updateShadeLabel() {
    const el = document.getElementById("shade-label");
    if (!el) return;
    const alt = document.documentElement.dataset.theme === "alt";
    el.textContent = "Shade: " + (alt ? "deep slate" : "charcoal") + " · press T";
  }
})();
