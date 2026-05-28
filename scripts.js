document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const leadForm = document.getElementById("leadForm");

  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });

  renderStats();
  renderPrograms();
  renderCourses();
  renderMethodology();
  renderLevelCards();
  renderGallery();
  renderEvents();
  renderTestimonials();
  renderFaq();
  renderContactInfo();

  // Scroll shrink header logic
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shrunk");
      } else {
        header.classList.remove("shrunk");
      }
    });
  }

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = leadForm.querySelector("button");
    submitButton.textContent = "Submitted";
    setTimeout(() => {
      submitButton.textContent = "Send inquiry";
    }, 1800);
  });
});

function renderStats() {
  const container = document.getElementById("stats");
  container.innerHTML = siteData.stats
    .map(
      (item) => `
      <div>
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </div>
    `
    )
    .join("\n");
}

function renderPrograms() {
  const container = document.getElementById("programList");
  container.innerHTML = siteData.programs
    .map(
      (program) => `
      <article class="program-card">
        <h3>${program.title}</h3>
        <p>${program.text}</p>
      </article>
    `
    )
    .join("\n");
}

function renderCourses() {
  const container = document.getElementById("courseCards");
  const flagMap = {
    german: "assets/images/flags/germany.svg",
    french: "assets/images/flags/france.svg",
    spanish: "assets/images/flags/spain.svg",
    japanese: "assets/images/flags/japan.svg",
    korean: "assets/images/flags/korea.svg",
    russian: "assets/images/flags/russia.svg"
  };

  container.innerHTML = siteData.courses
    .map(
      (course) => {
        const flagUrl = flagMap[course.slug] || "assets/images/icons/star.svg";
        const ctaHref = course.slug === "german" ? "german-course.html" : "#contact";
        return `
        <article class="course-card">
          <div class="flag">
            <img src="${flagUrl}" alt="${course.name} flag" />
          </div>
          <h3>${course.name}</h3>
          <p>${course.description}</p>
          <dl>
            <dt>Exam</dt>
            <dd>${course.exam}</dd>
            <dt>Levels</dt>
            <dd>${course.levels}</dd>
            <dt>Trainer</dt>
            <dd>${course.trainer}</dd>
          </dl>
          <a class="read-more" href="${ctaHref}">Free Demo Class</a>
        </article>
      `;
      }
    )
    .join("\n");
}

function renderMethodology() {
  const container = document.getElementById("methodologySteps");
  const icons = [
    // Step 01: Diagnosis/Search
    `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>`,
    // Step 02: Roadmap
    `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
      <line x1="9" y1="3" x2="9" y2="18"></line>
      <line x1="15" y1="6" x2="15" y2="21"></line>
    </svg>`,
    // Step 03: Practice/Classes
    `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>`,
    // Step 04: Readiness/Trophy
    `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`
  ];

  container.innerHTML = siteData.methodology
    .map(
      (item, idx) => `
      <article class="step" data-step="${idx + 1}">
        <div class="step-icon-wrapper">${icons[idx] || ""}</div>
        <div class="step-content">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>
    `
    )
    .join("\n");
}

function renderLevelCards() {
  const container = document.getElementById("levelCards");
  const flagMap = {
    german: "assets/images/flags/germany.svg",
    french: "assets/images/flags/france.svg",
    spanish: "assets/images/flags/spain.svg",
    japanese: "assets/images/flags/japan.svg",
    korean: "assets/images/flags/korea.svg",
    russian: "assets/images/flags/russia.svg"
  };

  container.innerHTML = siteData.courses
    .map(
      (course) => {
        const flagUrl = flagMap[course.slug] || "assets/images/icons/star.svg";
        return `
        <article class="program-card">
          <div class="flag">
            <img src="${flagUrl}" alt="${course.name} flag" />
          </div>
          <h3>${course.name} Test</h3>
          <p>Assess your current level before joining a batch.</p>
          <div class="button-row">
            <a class="btn btn-small" href="#contact">A1 Test</a>
            <a class="btn btn-small btn-secondary" href="#contact">A2 Test</a>
          </div>
        </article>
      `;
      }
    )
    .join("\n");
}

function renderGallery() {
  const container = document.getElementById("galleryGrid");
  container.innerHTML = siteData.gallery
    .map(
      (item) => `
      <article class="event-card gallery-item">
        <figure class="photo-slot" style="min-height: 220px; margin-bottom: 14px;">
          <img src="${item.imgUrl}" alt="${item.title}" />
        </figure>
        <h3 style="font-size: 1.15rem; margin-bottom: 0;">${item.title}</h3>
      </article>
    `
    )
    .join("\n");
}

function renderEvents() {
  const container = document.getElementById("eventCards");
  container.innerHTML = siteData.events
    .map(
      (item) => `
      <article class="event-card">
        <figure class="photo-slot" style="min-height: 220px; margin-bottom: 18px;">
          <img src="${item.imgUrl}" alt="${item.title}" />
        </figure>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
    )
    .join("\n");
}

function renderTestimonials() {
  const container = document.getElementById("testimonialCards");
  const dotsContainer = document.getElementById("sliderDots");
  
  if (!container || !dotsContainer) return;
  
  // Render cards
  container.innerHTML = siteData.testimonials
    .map(
      (item) => `
      <article class="testimonial-card">
        <div class="testimonial-avatar-wrapper">
          <img src="${item.image}" alt="Student portrait of ${item.name}" class="testimonial-avatar" />
        </div>
        <div class="testimonial-content">
          <p>${item.text}</p>
          <div class="testimonial-meta">
            <h3>${item.name}</h3>
            <span>${item.course}</span>
          </div>
        </div>
      </article>
    `
    )
    .join("\n");

  // Render dots
  dotsContainer.innerHTML = siteData.testimonials
    .map((_, index) => `<button class="dot${index === 0 ? " active" : ""}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>`)
    .join("\n");

  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      const card = container.children[index];
      if (card) {
        container.scrollTo({
          left: card.offsetLeft,
          behavior: "smooth"
        });
      }
    });
  });

  // Drag to scroll logic
  let isDown = false;
  let startX;
  let scrollLeftState;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("dragging");
    container.style.scrollSnapType = "none";
    container.style.scrollBehavior = "auto";
    startX = e.pageX - container.offsetLeft;
    scrollLeftState = container.scrollLeft;
  });

  const stopDragging = () => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove("dragging");
    container.style.scrollSnapType = "x mandatory";
    container.style.scrollBehavior = "smooth";
    
    // Snap to nearest card
    const cardWidth = container.children[0] ? container.children[0].offsetWidth + 24 : 324;
    const index = Math.round(container.scrollLeft / cardWidth);
    const targetCard = container.children[index];
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth"
      });
    }
  };

  container.addEventListener("mouseleave", stopDragging);
  container.addEventListener("mouseup", stopDragging);

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftState - walk;
  });

  // Prev / Next button logic
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      const cardWidth = container.children[0] ? container.children[0].offsetWidth + 24 : 324;
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      });
    });

    nextBtn.addEventListener("click", () => {
      const cardWidth = container.children[0] ? container.children[0].offsetWidth + 24 : 324;
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    });
  }

  // Highlight dot on scroll
  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0] ? container.children[0].offsetWidth + 24 : 324; // Card width + gap
    const activeIndex = Math.min(
      dots.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });
}

function renderFaq() {
  const container = document.getElementById("faqList");
  container.innerHTML = siteData.faqs
    .map(
      (item) => `
      <div class="faq-item">
        <button class="faq-question">
          <span>${item.q}</span>
          <img src="assets/images/icons/plus.svg" alt="Toggle" class="faq-toggle-icon" />
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `
    )
    .join("\n");

  const faqItems = container.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((other) => other.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

function renderContactInfo() {
  document.getElementById("contactPhone").innerHTML = `<small>Phone</small> <a href="${siteData.contact.phoneHref}">${siteData.contact.phone}</a>`;
  document.getElementById("contactEmail").innerHTML = `<small>Email</small> <a href="${siteData.contact.emailHref}">${siteData.contact.email}</a>`;
  document.getElementById("contactHours").innerHTML = `<small>Opening Hours</small> <span>${siteData.contact.hours}</span>`;
  document.getElementById("contactAddress").innerHTML = `<small>Address</small> <span>${siteData.contact.address}</span>`;
  document.getElementById("contactWhatsApp").setAttribute("href", siteData.contact.whatsapp);
}
