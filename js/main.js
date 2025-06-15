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

  // Loader
  const loader = document.createElement("div");
  loader.classList.add("loader");
  document.body.appendChild(loader);

  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  // Smooth scroll navigation
  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            const yOffset = -60;
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
    contactForm.addEventListener("submit", function (e) {
      let invalids = [];
      this.querySelectorAll("input, textarea").forEach((field) => {
        if (!field.checkValidity()) {
          field.classList.remove("shake", "invalid");
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

    contactForm
      .querySelectorAll("input, textarea")
      .forEach((field) => {
        field.addEventListener("animationend", function () {
          this.classList.remove("shake");
        });
        field.addEventListener("blur", function () {
          if (!this.checkValidity()) {
            this.classList.add("invalid");
          } else {
            this.classList.remove("invalid");
          }
        });
        field.addEventListener("input", function () {
          if (this.checkValidity()) {
            this.classList.remove("invalid");
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