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

  // Add to cart (si présent)
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  if (addToCartButtons.length) {
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.innerHTML = "Added to Cart";
        button.classList.add("added");
        setTimeout(() => {
          button.innerHTML = "Add to Cart";
          button.classList.remove("added");
        }, 2000);
      });
    });
  }

  // Newsletter form (si présent)
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const submitButton = newsletterForm.querySelector(
        'button[type="submit"]'
      );

      submitButton.innerHTML = "Subscribing...";
      submitButton.disabled = true;

      setTimeout(() => {
        emailInput.value = "";
        submitButton.innerHTML = "Subscribed!";
        setTimeout(() => {
          submitButton.innerHTML = "Subscribe";
          submitButton.disabled = false;
        }, 2000);
      }, 1500);
    });
  }

  // Parallax effect (si présent)
  const parallaxSection = document.querySelector(".parallax");
  if (parallaxSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

  // Live chat (si présent)
  const liveChatButton = document.querySelector(".live-chat-button");
  if (liveChatButton) {
    liveChatButton.addEventListener("click", () => {
      alert("Live chat feature is coming soon!");
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

  // Gallery lightbox (si présent)
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  if (galleryImages.length) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
          lightbox.remove();
        });
      });
    });
  }

  // Blog card hover (si présent)
  const blogCards = document.querySelectorAll(".blog-card");
  if (blogCards.length) {
    blogCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
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

  // Pre-order countdown (si présent)
  const preOrderCards = document.querySelectorAll(".pre-order-card");
  if (preOrderCards.length) {
    preOrderCards.forEach((card) => {
      const dateText = card.querySelector("p")?.innerText.split(": ")[1];
      if (!dateText) return;
      const releaseDate = new Date(dateText).getTime();
      const now = new Date().getTime();
      const distance = releaseDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        card.querySelector(
          "p"
        ).innerHTML = `Release in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        setInterval(() => {
          const now = new Date().getTime();
          const distance = releaseDate - now;

          if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            card.querySelector(
              "p"
            ).innerHTML = `Release in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
          } else {
            card.querySelector("p").innerHTML = "Available Now!";
          }
        }, 1000);
      } else {
        card.querySelector("p").innerHTML = "Available Now!";
      }
    });
  }
});
