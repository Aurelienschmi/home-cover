document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".sticky-header");

  // Ajout du bouton retour en haut uniquement si besoin
  const backToTopButton = document.createElement("div");
  backToTopButton.classList.add("back-to-top");
  backToTopButton.innerHTML = "&uarr;";
  document.body.appendChild(backToTopButton);

  // Loader
  const loader = document.createElement("div");
  loader.classList.add("loader");
  document.body.appendChild(loader);

  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  // Navigation scroll (seulement si navLinks existe)
  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            const yOffset = -60; // Ajuste selon la hauteur de ton header
            const y =
              targetSection.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      });
    });
  }
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Scroll reveal et header (seulement si header existe)
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (header && window.scrollY > 100) {
      header.classList.add("scrolled");
    } else if (header) {
      header.classList.remove("scrolled");
    }

    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }

    if (sections.length) {
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          section.classList.add("revealed");
          section.classList.add("fade-in");
        }
      });
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Back to top
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Parallax effect (si présent)
  const parallaxSection = document.querySelector(".parallax");
  if (parallaxSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

  // FAQ accordion (si présent)
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length) {
    faqItems.forEach((item) => {
      const question = item.querySelector("h3");
      const answer = item.querySelector("p");
      if (question && answer) {
        question.addEventListener("click", () => {
          answer.classList.toggle("active");
          if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
          } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
          }
        });
      }
    });
  }

  // Burger menu (si présent)
  const burger = document.getElementById("burger-menu");
  const navUl = document.querySelector("nav ul");
  if (burger && navUl) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navUl.classList.toggle("active");
    });

    navUl.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        navUl.classList.remove("active");
      });
    });
  }

  document.addEventListener("click", (e) => {
    if (
      navUl.classList.contains("active") &&
      !navUl.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      navUl.classList.remove("active");
      burger.classList.remove("active");
    }
  });
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (e) {
      let invalids = [];
      this.querySelectorAll("input, textarea").forEach((field) => {
        if (!field.checkValidity()) {
          field.classList.remove("shake", "invalid");
          // Force reflow to restart animation
          void field.offsetWidth;
          field.classList.add("shake", "invalid");
          invalids.push(field);
        }
      });
      if (invalids.length > 0) {
        e.preventDefault();
        invalids[0].focus();
      }
    });

  // Supprime la classe shake après l'animation pour pouvoir la rejouer
  document
    .querySelectorAll(".contact-form input, .contact-form textarea")
    .forEach((field) => {
      field.addEventListener("animationend", function () {
        this.classList.remove("shake");
      });
      // Ajoute la classe invalid si l'utilisateur quitte le champ sans remplir
      field.addEventListener("blur", function () {
        if (!this.checkValidity() && this.value !== "") {
          this.classList.add("invalid");
        } else if (!this.checkValidity() && this.value === "") {
          this.classList.add("invalid");
        } else {
          this.classList.remove("invalid");
        }
      });
      // Retire la classe invalid dès qu'on tape
      field.addEventListener("input", function () {
        if (this.checkValidity()) {
          this.classList.remove("invalid");
        }
      });
    });
});
