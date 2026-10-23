/* TrueHurtz Investigators interactions */
(() => {
  "use strict";
  const preloader = document.getElementById("preloader");
  const hidePreloader = () => preloader && preloader.classList.add("is-hidden");
  window.addEventListener("load", () => window.setTimeout(hidePreloader, 250));
  window.setTimeout(hidePreloader, 1800); // Fallback if a remote asset loads slowly.

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = [...document.querySelectorAll(".nav-link")];

  function closeMenu() {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  }
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("menu-open", isOpen);
    });
    navItems.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 850) closeMenu(); });
  }

  // Active navigation state follows the visible section.
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Scroll-in reveal animation, with a fallback for older browsers.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Automatically select the relevant service when an Enquire Now link is used.
  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
      const service = document.getElementById("service");
      if (service) service.value = link.dataset.service || "";
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Contact form: browser-side validation plus Formspree submission.
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", async event => {
      event.preventDefault();
      status.textContent = "";
      status.className = "form-status";

      const name = document.getElementById("name");
      const phone = document.getElementById("phone");
      const email = document.getElementById("email");
      const service = document.getElementById("service");
      const message = document.getElementById("message");
      const consent = document.getElementById("consent");
      const phonePattern = /^[6-9]\d{9}$/;

      if (!name.value.trim() || name.value.trim().length < 2) {
        status.textContent = "Please enter your name (at least 2 characters)."; name.focus(); status.classList.add("error"); return;
      }
      if (!phonePattern.test(phone.value.trim())) {
        status.textContent = "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."; phone.focus(); status.classList.add("error"); return;
      }
      if (email.value.trim() && !email.checkValidity()) {
        status.textContent = "Please enter a valid email address."; email.focus(); status.classList.add("error"); return;
      }
      if (!service.value) {
        status.textContent = "Please choose a service."; service.focus(); status.classList.add("error"); return;
      }
      if (message.value.trim().length < 10) {
        status.textContent = "Please provide a little more detail (at least 10 characters)."; message.focus(); status.classList.add("error"); return;
      }
      if (!consent.checked) {
        status.textContent = "Please confirm the contact and privacy consent to continue."; consent.focus(); status.classList.add("error"); return;
      }

      const endpoint = form.getAttribute("action") || "";
      if (endpoint.includes("YOUR_FORMSPREE_ID")) {
        status.textContent = "The enquiry form is not connected yet. Please use Call Now or WhatsApp, or complete the Formspree setup in README.txt.";
        status.classList.add("error");
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.textContent = "Sending securely…";
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        if (response.ok) {
          status.textContent = "Thank you. Your enquiry has been sent. We will contact you as appropriate.";
          status.classList.add("success");
          form.reset();
        } else {
          let details = {};
          try { details = await response.json(); } catch (_) {}
          const serverMessage = details.errors && details.errors.map(item => item.message).join(" ");
          throw new Error(serverMessage || "The form could not be sent. Please try again or contact us by phone/WhatsApp.");
        }
      } catch (error) {
        status.textContent = error.message || "Unable to send right now. Please contact us by phone or WhatsApp.";
        status.classList.add("error");
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }
    });
  }

  // One open FAQ at a time for a tidy accordion experience.
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        document.querySelectorAll(".faq-item").forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });
})();
