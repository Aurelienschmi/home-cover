document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".sticky-header");

  // Back to top button
  const backToTopButton = document.createElement("div");
  backToTopButton.classList.add("back-to-top");
  backToTopButton.innerHTML = "&uarr;";
  document.body.appendChild(backToTopButton);

  // Loader - version améliorée
  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  loader.style.display = "flex";
  loader.style.justifyContent = "center";
  loader.style.alignItems = "center";
  loader.style.zIndex = "9999";
  document.body.appendChild(loader);

  // Cacher le loader après chargement complet
  const hideLoader = () => {
    if (loader && loader.parentNode) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.3s";
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 300);
    }
  };

  // Plusieurs événements pour s'assurer que le loader disparaît
  window.addEventListener("load", hideLoader);
  document.addEventListener("DOMContentLoaded", hideLoader);
  
  // Fallback au cas où les événements ne se déclenchent pas
  setTimeout(hideLoader, 2000);

  // Smooth scroll navigation
  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            const yOffset = -100;
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

  // Year in footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Scroll reveal and header
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

  // Parallax effect
  const parallaxSection = document.querySelector(".parallax");
  if (parallaxSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

  // FAQ accordion
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

  // Burger menu
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
      navUl &&
      navUl.classList.contains("active") &&
      !navUl.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      navUl.classList.remove("active");
      burger.classList.remove("active");
    }
  });

  // Form validation animation
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    // Amélioration de la validation du formulaire
    contactForm.addEventListener("submit", function (e) {
      let invalids = [];
      let isValid = true;
      
      this.querySelectorAll("input, textarea").forEach((field) => {
        const errorSpan = document.getElementById(field.id + "-error");
        
        if (!field.checkValidity()) {
          field.classList.remove("shake", "invalid");
          void field.offsetWidth;
          field.classList.add("shake", "invalid");
          
          // Messages d'erreur personnalisés
          let errorMessage = "";
          if (field.validity.valueMissing) {
            errorMessage = "Ce champ est requis";
          } else if (field.validity.typeMismatch) {
            if (field.type === "email") {
              errorMessage = "Veuillez entrer une adresse email valide";
            } else if (field.type === "tel") {
              errorMessage = "Veuillez entrer un numéro de téléphone valide";
            }
          } else if (field.validity.patternMismatch) {
            if (field.type === "tel") {
              errorMessage = "Format attendu : 01 23 45 67 89";
            }
          }
          
          if (errorSpan) {
            errorSpan.textContent = errorMessage;
          }
          
          invalids.push(field);
          isValid = false;
        } else {
          field.classList.remove("invalid");
          if (errorSpan) {
            errorSpan.textContent = "";
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        invalids[0].focus();
        
        // Annonce pour les lecteurs d'écran
        const announcement = document.createElement("div");
        announcement.setAttribute("aria-live", "polite");
        announcement.setAttribute("aria-atomic", "true");
        announcement.className = "sr-only";
        announcement.textContent = `Erreur dans le formulaire. ${invalids.length} champ(s) à corriger.`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 3000);
      }
    });

    // Validation en temps réel améliorée
    contactForm.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("animationend", function () {
        this.classList.remove("shake");
      });
      
      field.addEventListener("blur", function () {
        const errorSpan = document.getElementById(this.id + "-error");
        
        if (!this.checkValidity() && this.value.trim() !== "") {
          this.classList.add("invalid");
          
          let errorMessage = "";
          if (this.validity.typeMismatch) {
            if (this.type === "email") {
              errorMessage = "Veuillez entrer une adresse email valide";
            } else if (this.type === "tel") {
              errorMessage = "Veuillez entrer un numéro de téléphone valide";
            }
          } else if (this.validity.patternMismatch) {
            if (this.type === "tel") {
              errorMessage = "Format attendu : 01 23 45 67 89";
            }
          }
          
          if (errorSpan) {
            errorSpan.textContent = errorMessage;
          }
        } else {
          this.classList.remove("invalid");
          if (errorSpan) {
            errorSpan.textContent = "";
          }
        }
      });
      
      field.addEventListener("input", function () {
        if (this.checkValidity()) {
          this.classList.remove("invalid");
          const errorSpan = document.getElementById(this.id + "-error");
          if (errorSpan) {
            errorSpan.textContent = "";
          }
        }
      });
    });
  }

  // Carousel for about-image section
  const track = document.querySelector('.about-image .carousel-track');
  if (track) {
    const images = track.querySelectorAll('img');
    const prevBtn = document.querySelector('.about-image .carousel-btn.prev');
    const nextBtn = document.querySelector('.about-image .carousel-btn.next');
    let current = 0;

    function showImage(idx) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
      });
    }
    showImage(current);

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
      });
      nextBtn.addEventListener('click', () => {
        current = (current + 1) % images.length;
        showImage(current);
      });
    }
  }
});