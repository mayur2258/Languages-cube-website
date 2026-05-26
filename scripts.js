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
    german: "public/images/flags/germany.svg",
    french: "public/images/flags/france.svg",
    spanish: "public/images/flags/spain.svg",
    japanese: "public/images/flags/japan.svg",
    korean: "public/images/flags/korea.svg",
    russian: "public/images/flags/russia.svg"
  };

  container.innerHTML = siteData.courses
    .map(
      (course) => {
        const flagUrl = flagMap[course.slug] || "public/images/icons/star.svg";
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
  container.innerHTML = siteData.methodology
    .map(
      (item) => `
      <article class="step">
        <strong>${item.step}</strong>
        <div>
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
    german: "public/images/flags/germany.svg",
    french: "public/images/flags/france.svg",
    spanish: "public/images/flags/spain.svg",
    japanese: "public/images/flags/japan.svg",
    korean: "public/images/flags/korea.svg",
    russian: "public/images/flags/russia.svg"
  };

  container.innerHTML = siteData.courses
    .map(
      (course) => {
        const flagUrl = flagMap[course.slug] || "public/images/icons/star.svg";
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
  container.innerHTML = siteData.testimonials
    .map(
      (item) => `
      <article class="testimonial-card">
        <p>${item.text}</p>
        <h3>${item.name}</h3>
        <span>${item.course}</span>
      </article>
    `
    )
    .join("\n");
}

function renderFaq() {
  const container = document.getElementById("faqList");
  container.innerHTML = siteData.faqs
    .map(
      (item) => `
      <div class="faq-item">
        <button class="faq-question">
          <span>${item.q}</span>
          <img src="public/images/icons/plus.svg" alt="Toggle" class="faq-toggle-icon" />
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
