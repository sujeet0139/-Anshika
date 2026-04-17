const productCatalog = [
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    category: "Shipping and Storage",
    shortLabel: "CB",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    description: "Transit-safe corrugated cartons for shipping, storage, and warehouse movement.",
    useCase: "Ideal for e-commerce dispatch, FMCG supply, and stacked warehouse storage.",
    customization: "Available in multiple ply options, dimensions, flute combinations, and printing formats.",
    sizes: ["12 x 10 x 8 inch", "16 x 12 x 10 inch", "20 x 16 x 14 inch", "Custom size"],
    features: ["3 ply and 5 ply options", "Strong edge protection", "Suitable for bulk shipping"]
  },
  {
    slug: "printed-boxes",
    name: "Printed Boxes",
    category: "Branding and Retail Dispatch",
    shortLabel: "PB",
    image: "https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&fit=crop&w=1400&q=80",
    description: "Printed cartons for branding, handling instructions, and stronger shelf presentation.",
    useCase: "Common for branded shipping, retail-ready packs, and promotional distribution.",
    customization: "Single color, multi-color, branding panels, and custom artwork support subject to requirement.",
    sizes: ["10 x 8 x 4 inch", "14 x 10 x 6 inch", "18 x 12 x 8 inch", "Custom size"],
    features: ["Brand print support", "Retail and B2B presentation", "Available for repeat orders"]
  },
  {
    slug: "duplex-boxes",
    name: "Duplex Boxes",
    category: "Retail and Pharma Packaging",
    shortLabel: "DB",
    image: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?auto=format&fit=crop&w=1400&q=80",
    description: "Neat duplex packaging for lightweight products that need cleaner outer presentation.",
    useCase: "Used across pharma, cosmetics, personal care, and retail display packaging.",
    customization: "Board thickness, finish, print layout, and insert-based customization available.",
    sizes: ["6 x 4 x 2 inch", "8 x 6 x 3 inch", "10 x 8 x 4 inch", "Custom size"],
    features: ["Clean print surface", "Retail and pharma friendly", "Custom branding support"]
  },
  {
    slug: "heavy-duty-cartons",
    name: "Heavy Duty Cartons",
    category: "Industrial Dispatch",
    shortLabel: "HD",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=80",
    description: "Reinforced cartons built for heavier loads, safer handling, and industrial movement.",
    useCase: "Designed for hardware, automotive parts, industrial dispatch, and export-oriented packaging.",
    customization: "Can be discussed based on load bearing, transport, stacking, and export handling requirements.",
    sizes: ["18 x 14 x 12 inch", "22 x 18 x 16 inch", "26 x 20 x 18 inch", "Custom size"],
    features: ["Better load support", "Suitable for long-distance movement", "Bulk order manufacturing"]
  },
  {
    slug: "packaging-materials",
    name: "Packaging Materials",
    category: "Dispatch Accessories",
    shortLabel: "PM",
    image: "https://images.unsplash.com/photo-1773125929765-99d4d67e831d?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1773125929765-99d4d67e831d?auto=format&fit=crop&w=1400&q=80",
    description: "Support materials for dispatch preparation, protective packaging, and warehouse-ready packing.",
    useCase: "Used alongside cartons for secure packaging, filling, and movement preparation.",
    customization: "Material selection depends on product fragility, packing style, transport mode, and warehouse handling.",
    sizes: ["Roll and sheet options", "Custom cut requirement", "Dispatch kits", "Custom size"],
    features: ["Transit support materials", "Warehouse packing assistance", "Added protection for dispatch"]
  }
];

const heroSlides = [
  {
    title: "Bulk Manufacturing for All Industries",
    tag: "Industrial Packaging",
    copy: "Corrugated cartons, duplex boxes, and dispatch-ready packaging for growing businesses.",
    image: "https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Custom Size and Printed Box Supply",
    tag: "Custom Solutions",
    copy: "Printed cartons, branded boxes, and outer packaging tailored around your product dimensions.",
    image: "https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Warehouse and Transport Ready Stock",
    tag: "Bulk Dispatch",
    copy: "Heavy duty cartons and storage-ready packaging for stacked inventory, shipping safety, and repeat supply.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80"
  }
];

const whyChooseUs = [
  {
    title: "High Quality Material",
    description: "Material choice is aligned with handling strength, stack load, and transport conditions.",
    image: "https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=1200&q=80",
    alt: "Packaging quality inspection"
  },
  {
    title: "Custom Sizes Available",
    description: "Standard sizes and customer-specific dimensions can both be discussed through inquiry.",
    image: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Custom packaging planning"
  },
  {
    title: "Bulk Order Capability",
    description: "The site is structured for manufacturing leads and repeated commercial supply.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    alt: "Bulk packaging supply"
  },
  {
    title: "Fast Delivery",
    description: "Production and dispatch planning can be aligned around your order cycle and urgency.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    alt: "Delivery and dispatch planning"
  },
  {
    title: "Eco-Friendly Packaging",
    description: "Packaging direction can include recyclable and lower-impact material preference where applicable.",
    image: "https://images.unsplash.com/photo-1773125929765-99d4d67e831d?auto=format&fit=crop&w=1200&q=80",
    alt: "Sustainable packaging direction"
  }
];

const industries = [
  {
    icon: "EC",
    title: "E-commerce",
    description: "Outer cartons for dispatch safety, courier handling, and repetitive order movement.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    alt: "E-commerce packaging supply"
  },
  {
    icon: "FM",
    title: "FMCG",
    description: "Packaging for bulk movement, shelf-ready distribution, and continuous supply cycles.",
    image: "https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=1200&q=80",
    alt: "FMCG packaging supply"
  },
  {
    icon: "PH",
    title: "Pharma",
    description: "Duplex and carton solutions where print clarity and pack protection both matter.",
    image: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Pharma packaging supply"
  },
  {
    icon: "RT",
    title: "Retail",
    description: "Brand-facing packaging that balances protection, presentation, and practical storage.",
    image: "https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&fit=crop&w=1200&q=80",
    alt: "Retail packaging supply"
  },
  {
    icon: "EL",
    title: "Electronics",
    description: "Corrugated and protective packaging for safer transit of accessories and components.",
    image: "https://images.unsplash.com/photo-1773125929765-99d4d67e831d?auto=format&fit=crop&w=1200&q=80",
    alt: "Electronics packaging supply"
  }
];

const testimonials = [
  {
    quote: "We needed a supplier that felt like a manufacturer, not a reseller. The packaging discussion was practical and focused on actual dispatch needs.",
    name: "Rahul Mehta",
    role: "Operations Manager, FMCG Distributor"
  },
  {
    quote: "The inquiry flow made it easy to discuss custom sizes and monthly demand without the distraction of a shopping-cart layout.",
    name: "Nisha Arora",
    role: "Procurement Lead, Retail Brand"
  },
  {
    quote: "Heavy duty carton requirements were handled with the right questions about weight, stacking, and transit route.",
    name: "Vikram Sethi",
    role: "Dispatch Coordinator, Industrial Supplier"
  }
];

const faqResponses = {
  "what is moq?": "MOQ depends on box type, print requirement, and size. For accurate guidance, share the category and expected quantity on WhatsApp or through the inquiry form.",
  "do you provide custom size?": "Yes. We can discuss custom box sizes based on product dimensions, handling requirement, and quantity.",
  "delivery time?": "Delivery time varies by quantity, print complexity, and destination. Urgent requirements should be sent on call or WhatsApp.",
  moq: "MOQ depends on the packaging type and customization level. Share the requirement for a practical answer.",
  custom: "Custom sizes are available. Send product dimensions or required outer dimensions for better guidance.",
  size: "Custom sizing is available across corrugated, printed, and duplex packaging lines.",
  delivery: "Delivery timing depends on production volume, print requirement, and destination city.",
  printed: "Printed carton support is available for branding, handling details, and presentation needs.",
  default: "Please share your box type, size, quantity, and application. You can also continue on WhatsApp for a direct discussion."
};

const productShowcase = document.querySelector("#product-showcase");
const whyChooseGrid = document.querySelector("#why-choose-grid");
const industryGrid = document.querySelector("#industry-grid");
const productDetails = document.querySelector("#product-details");
const productTypeSelect = document.querySelector("#productType");
const boxSizeSelect = document.querySelector("#boxSizeSelect");
const quickProductType = document.querySelector("#quick-product-type");
const quickBoxSize = document.querySelector("#quick-box-size");
const customBoxSize = document.querySelector("#customBoxSize");
const testimonialSlider = document.querySelector("#testimonial-slider");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const yearElement = document.querySelector("#year");
const chatToggle = document.querySelector("#chat-toggle");
const chatPanel = document.querySelector("#chat-panel");
const chatClose = document.querySelector("#chat-close");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-messages");
const chatReplyButtons = document.querySelectorAll("[data-chat-reply]");
const callbackModal = document.querySelector("#callback-modal");
const callbackClose = document.querySelector("#callback-close");
const callbackTriggers = document.querySelectorAll(".trigger-callback");
const leadForms = document.querySelectorAll("[data-form-type]");
const counterItems = document.querySelectorAll("[data-counter]");
const heroSlideImage = document.querySelector("#hero-slide-image");
const heroSlideCopy = document.querySelector("#hero-slide-copy");
const heroSlideTitle = document.querySelector("#hero-slide-title");
const heroSlideTag = document.querySelector("#hero-slide-tag");
const heroSliderDots = document.querySelector("#hero-slider-dots");

function createImageFallback(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${escapeHtml(label)}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0d2b52" />
          <stop offset="100%" stop-color="#18497b" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)" />
      <rect x="120" y="140" width="960" height="520" rx="36" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)" />
      <rect x="220" y="250" width="250" height="180" rx="18" fill="#eb7a1a" opacity="0.9" />
      <rect x="500" y="210" width="210" height="220" rx="18" fill="#f29a37" opacity="0.9" />
      <rect x="740" y="280" width="220" height="150" rx="18" fill="#fff0df" opacity="0.9" />
      <text x="600" y="560" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="54" font-weight="700">${escapeHtml(label)}</text>
      <text x="600" y="620" text-anchor="middle" fill="#d9e3ee" font-family="Arial, sans-serif" font-size="28">Industrial packaging visual</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function attachImageFallbacks() {
  document.querySelectorAll("img[data-fallback-label]").forEach((image) => {
    image.referrerPolicy = "no-referrer";
    image.addEventListener(
      "error",
      () => {
        image.src = createImageFallback(image.dataset.fallbackLabel || "Packaging Image");
      },
      { once: true }
    );
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getProductByName(name) {
  return productCatalog.find((product) => product.name === name) || productCatalog[0];
}

function renderSizeOptions(selectElement, sizes) {
  if (!selectElement) {
    return;
  }

  selectElement.innerHTML = sizes
    .map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`)
    .join("");
}

function updateSelectedSizes(productName, selectElement) {
  const product = getProductByName(productName);
  renderSizeOptions(selectElement, product.sizes);

  if (customBoxSize && selectElement === boxSizeSelect) {
    customBoxSize.placeholder = selectElement.value === "Custom size" ? "Enter custom size" : selectElement.value;
  }
}

function renderProductShowcase() {
  if (!productShowcase) {
    return;
  }

  productShowcase.innerHTML = productCatalog
    .map(
      (product, index) => `
        <article class="product-card card-surface">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} packaging category" referrerpolicy="no-referrer" data-fallback-label="${escapeHtml(product.name)}" />
          <div class="product-card-topline">
            <span class="product-tag">${escapeHtml(product.shortLabel)}</span>
            <span class="product-card-index">0${index + 1}</span>
          </div>
          <span class="product-card-category">${escapeHtml(product.category)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.description)}</p>
          <div class="product-card-meta">
            <span>Custom quote available</span>
            <span>${escapeHtml(product.sizes[0])}</span>
          </div>
          <p class="product-card-usecase">${escapeHtml(product.useCase)}</p>
          <a class="button button-secondary" href="products.html#${escapeHtml(product.slug)}">Request Quote</a>
        </article>
      `
    )
    .join("");
}

function renderWhyChoose() {
  if (!whyChooseGrid) {
    return;
  }

  const [leadItem, ...supportItems] = whyChooseUs;

  whyChooseGrid.innerHTML = `
    <article class="why-lead-card card-surface accent-card">
      <div class="why-lead-copy">
        <p class="why-kicker">Reliable Supply System</p>
        <h3>${escapeHtml(leadItem.title)}</h3>
        <p>${escapeHtml(leadItem.description)}</p>
        <ul class="why-lead-list">
          <li>Fast quotation and requirement review</li>
          <li>Custom manufacturing for repeat demand</li>
          <li>Support for plain, printed, duplex, and heavy cartons</li>
        </ul>
      </div>
      <div class="why-lead-media image-panel">
        <img src="${escapeHtml(leadItem.image)}" alt="${escapeHtml(leadItem.alt)}" data-fallback-label="${escapeHtml(leadItem.title)}" />
      </div>
    </article>
    <div class="why-support-grid">
      ${supportItems
        .map(
          (item, index) => `
            <article class="feature-card card-surface${index === 0 ? " feature-card-emphasis" : ""}">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" data-fallback-label="${escapeHtml(item.title)}" />
              <span class="feature-card-number">0${index + 2}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderIndustries() {
  if (!industryGrid) {
    return;
  }

  industryGrid.innerHTML = industries
    .map(
      (industry) => `
        <article class="industry-card card-surface">
          <img src="${escapeHtml(industry.image)}" alt="${escapeHtml(industry.alt)}" data-fallback-label="${escapeHtml(industry.title)}" />
          <span class="industry-icon">${escapeHtml(industry.icon)}</span>
          <h3>${escapeHtml(industry.title)}</h3>
          <p>${escapeHtml(industry.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderProductDetails() {
  if (!productDetails) {
    return;
  }

  productDetails.innerHTML = productCatalog
    .map(
      (product) => `
        <article class="product-detail-card card-surface" id="${escapeHtml(product.slug)}">
          <img src="${escapeHtml(product.heroImage)}" alt="${escapeHtml(product.name)} large product view" referrerpolicy="no-referrer" data-fallback-label="${escapeHtml(product.name)} Detail" />
          <div class="product-detail-copy">
            <p class="eyebrow">Product Category</p>
            <h2>${escapeHtml(product.name)}</h2>
            <p>${escapeHtml(product.description)}</p>
            <div class="product-detail-meta">
              <span>Category: ${escapeHtml(product.category)}</span>
              <span>Customization: Available on inquiry</span>
              <span>Size Focus: ${escapeHtml(product.sizes[0])}</span>
            </div>
            <ul>
              <li><strong>Use Cases:</strong> ${escapeHtml(product.useCase)}</li>
              <li><strong>Customization:</strong> ${escapeHtml(product.customization)}</li>
              <li><strong>Available Sizes:</strong> ${escapeHtml(product.sizes.join(", "))}</li>
            </ul>
            <a class="button button-primary" href="enquiry.html?productType=${encodeURIComponent(product.name)}&boxSize=${encodeURIComponent(product.sizes[0])}">Request Quote</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProductSelect(selectElement) {
  if (!selectElement) {
    return;
  }

  selectElement.innerHTML = productCatalog
    .map((product) => `<option value="${escapeHtml(product.name)}">${escapeHtml(product.name)}</option>`)
    .join("");
}

function renderTestimonial(index) {
  if (!testimonialSlider) {
    return;
  }

  const testimonial = testimonials[index];
  testimonialSlider.innerHTML = `
    <p class="testimonial-quote">“${escapeHtml(testimonial.quote)}”</p>
    <div class="testimonial-meta">
      <p class="testimonial-name">${escapeHtml(testimonial.name)}</p>
      <p class="testimonial-role">${escapeHtml(testimonial.role)}</p>
    </div>
  `;
}

function renderHeroSlider() {
  if (!heroSlideImage || !heroSlideCopy || !heroSlideTitle || !heroSlideTag || !heroSliderDots) {
    return;
  }

  let activeIndex = 0;

  function updateSlide(index) {
    const slide = heroSlides[index];
    heroSlideImage.src = slide.image;
    heroSlideImage.alt = slide.title;
    heroSlideCopy.textContent = slide.copy;
    heroSlideTitle.textContent = slide.title;
    heroSlideTag.textContent = slide.tag;
    heroSliderDots.querySelectorAll(".hero-slider-dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
    activeIndex = index;
  }

  heroSliderDots.innerHTML = heroSlides
    .map(
      (_, index) => `<button class="hero-slider-dot${index === 0 ? " is-active" : ""}" type="button" aria-label="Open hero slide ${index + 1}" data-slide-index="${index}"></button>`
    )
    .join("");

  heroSliderDots.querySelectorAll(".hero-slider-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      updateSlide(Number(dot.getAttribute("data-slide-index")));
    });
  });

  updateSlide(activeIndex);

  window.setInterval(() => {
    updateSlide((activeIndex + 1) % heroSlides.length);
  }, 3800);
}

function appendChatMessage(type, text) {
  if (!chatMessages) {
    return;
  }

  const message = document.createElement("div");
  message.className = `chat-bubble ${type}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatReply(message) {
  const normalized = message.trim().toLowerCase();

  if (faqResponses[normalized]) {
    return faqResponses[normalized];
  }

  if (normalized.includes("moq")) {
    return faqResponses.moq;
  }

  if (normalized.includes("custom") || normalized.includes("size")) {
    return faqResponses.custom;
  }

  if (normalized.includes("delivery")) {
    return faqResponses.delivery;
  }

  if (normalized.includes("print")) {
    return faqResponses.printed;
  }

  return faqResponses.default;
}

function showCallbackModal() {
  if (!callbackModal || sessionStorage.getItem("callbackDismissed") === "true") {
    return;
  }

  callbackModal.classList.remove("hidden");
  callbackModal.setAttribute("aria-hidden", "false");
}

function hideCallbackModal() {
  if (!callbackModal) {
    return;
  }

  callbackModal.classList.add("hidden");
  callbackModal.setAttribute("aria-hidden", "true");
  sessionStorage.setItem("callbackDismissed", "true");
}

function buildMailBody(fields) {
  return [
    "Hello Anshika Enterprises,",
    "",
    `Name / Company: ${fields.customerName || "Not provided"}`,
    `Phone Number: ${fields.mobileNumber || "Not provided"}`,
    `Email Address: ${fields.emailAddress || "Not provided"}`,
    `Inquiry Type: ${fields.enquiryType || "General packaging inquiry"}`,
    `Product Category: ${fields.productType || "Not specified"}`,
    `Box Size: ${fields.boxSize || fields.boxSizeSelect || "Not specified"}`,
    `Quantity Required: ${fields.quantity || "Not specified"}`,
    `Printing Requirement: ${fields.printing || "Not specified"}`,
    `Delivery City: ${fields.deliveryCity || "Not specified"}`,
    `Requirement: ${fields.message || "Not specified"}`,
    "",
    "Please share a quotation and callback."
  ].join("\n");
}

function handleLeadFormSubmit(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const rawFields = Object.fromEntries(formData.entries());
    const fields = { ...rawFields };

    if (fields.boxSizeSelect === "Custom size" && fields.boxSize) {
      fields.boxSize = fields.boxSize;
    } else if (!fields.boxSize && fields.boxSizeSelect) {
      fields.boxSize = fields.boxSizeSelect;
    }

    if (!fields.productType && quickProductType) {
      fields.productType = quickProductType.value;
    }

    const subject = encodeURIComponent(`${fields.enquiryType || "Quote request"} - ${fields.productType || "Packaging requirement"}`);
    const body = encodeURIComponent(buildMailBody(fields));
    const whatsappText = encodeURIComponent(
      `Hello Anshika Enterprises,\nName: ${fields.customerName || "Not provided"}\nPhone: ${fields.mobileNumber || "Not provided"}\nProduct: ${fields.productType || "Not specified"}\nRequirement: ${fields.message || "Not specified"}`
    );

    window.location.href = `mailto:anshikaenterprise770@gmail.com?subject=${subject}&body=${body}`;
    window.open(`https://wa.me/918750515157?text=${whatsappText}`, "_blank", "noopener");

    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = "Your request has been prepared in email and WhatsApp. If needed, call directly for faster follow-up.";
    }

    if (form.id === "callback-form") {
      hideCallbackModal();
    }
  });
}

function animateCounter(counter) {
  const target = Number(counter.getAttribute("data-counter"));
  const duration = 1300;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(target * progress);
    counter.textContent = target >= 1000 ? value.toLocaleString("en-IN") : String(value);
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

renderProductShowcase();
renderWhyChoose();
renderIndustries();
renderProductDetails();
renderProductSelect(productTypeSelect);
renderProductSelect(quickProductType);
attachImageFallbacks();
renderHeroSlider();

if (productTypeSelect) {
  updateSelectedSizes(productTypeSelect.value, boxSizeSelect);
  productTypeSelect.addEventListener("change", () => updateSelectedSizes(productTypeSelect.value, boxSizeSelect));
}

if (quickProductType) {
  updateSelectedSizes(quickProductType.value, quickBoxSize);
  quickProductType.addEventListener("change", () => updateSelectedSizes(quickProductType.value, quickBoxSize));
}

if (testimonialSlider) {
  let testimonialIndex = 0;
  renderTestimonial(testimonialIndex);
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial(testimonialIndex);
  }, 4200);
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (counterItems.length > 0) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  counterItems.forEach((item) => counterObserver.observe(item));
}

if (chatToggle && chatPanel) {
  chatToggle.addEventListener("click", () => {
    const willOpen = chatPanel.classList.contains("hidden");
    chatPanel.classList.toggle("hidden");
    chatToggle.setAttribute("aria-expanded", String(willOpen));
  });
}

if (chatClose && chatPanel && chatToggle) {
  chatClose.addEventListener("click", () => {
    chatPanel.classList.add("hidden");
    chatToggle.setAttribute("aria-expanded", "false");
  });
}

chatReplyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const message = button.getAttribute("data-chat-reply") || "";
    appendChatMessage("user", message);
    appendChatMessage("bot", getChatReply(message));
  });
});

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) {
      return;
    }
    appendChatMessage("user", message);
    appendChatMessage("bot", getChatReply(message));
    chatInput.value = "";
  });
}

callbackTriggers.forEach((button) => {
  button.addEventListener("click", showCallbackModal);
});

if (callbackClose) {
  callbackClose.addEventListener("click", hideCallbackModal);
}

if (callbackModal) {
  callbackModal.addEventListener("click", (event) => {
    if (event.target === callbackModal) {
      hideCallbackModal();
    }
  });

  window.setTimeout(() => {
    if (["home", "products"].includes(document.body.dataset.page)) {
      showCallbackModal();
    }
  }, 5000);
}

leadForms.forEach(handleLeadFormSubmit);

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const pageParams = new URLSearchParams(window.location.search);

if (pageParams.get("productType") && productTypeSelect) {
  productTypeSelect.value = pageParams.get("productType");
  updateSelectedSizes(productTypeSelect.value, boxSizeSelect);
}

if (pageParams.get("boxSize") && boxSizeSelect) {
  const incomingSize = pageParams.get("boxSize");
  const availableSizes = Array.from(boxSizeSelect.options).map((option) => option.value);
  if (availableSizes.includes(incomingSize)) {
    boxSizeSelect.value = incomingSize;
  } else if (customBoxSize) {
    boxSizeSelect.value = "Custom size";
    customBoxSize.value = incomingSize;
  }
}