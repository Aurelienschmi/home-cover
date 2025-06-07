document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".sticky-header");
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

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        const yOffset = -60; // Décalage en pixels (ajuste selon la hauteur de ton header)
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
});

  // Function to check if an element is in viewport
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

  // Function to handle scroll events
  function handleScroll() {
    // Change header background on scroll
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Show/hide back to top button
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }

    // Apply scroll reveal effect to all sections
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.classList.add("revealed");
        section.classList.add("fade-in");
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Trigger initial scroll check
  handleScroll();

  // Back to top functionality
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
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

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector('button[type="submit"]');

    submitButton.innerHTML = "Subscribing...";
    submitButton.disabled = true;

    // Simulating an API call
    setTimeout(() => {
      emailInput.value = "";
      submitButton.innerHTML = "Subscribed!";
      setTimeout(() => {
        submitButton.innerHTML = "Subscribe";
        submitButton.disabled = false;
      }, 2000);
    }, 1500);
  });

  // Parallax effect for hero section
  const parallaxSection = document.querySelector(".parallax");
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Live chat functionality
  const liveChatButton = document.querySelector(".live-chat-button");
  liveChatButton.addEventListener("click", () => {
    alert("Live chat feature is coming soon!");
  });

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector("h3");
    const answer = item.querySelector("p");

    question.addEventListener("click", () => {
      answer.classList.toggle("active");
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Community gallery lightbox
  const galleryImages = document.querySelectorAll(".gallery-grid img");
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

  // Blog post hover effect
  const blogCards = document.querySelectorAll(".blog-card");
  blogCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });
  // Burger menu functionality
  const burger = document.getElementById("burger-menu");
  const navUl = document.querySelector("nav ul");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navUl.classList.toggle("active");
  });

  // Close menu when clicking a link (on mobile)
  navUl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navUl.classList.remove("active");
    });
  });

  // Pre-order countdown timer
  const preOrderCards = document.querySelectorAll(".pre-order-card");
  preOrderCards.forEach((card) => {
    const releaseDate = new Date(
      card.querySelector("p").innerText.split(": ")[1]
    ).getTime();
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
});
