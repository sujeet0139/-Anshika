const sampleProducts = [
  {
    name: "3 Ply Shipping Carton",
    type: "E-commerce",
    description: "Lightweight outer box for apparel, cosmetics, and daily dispatch items.",
    imageLabel: "3 Ply",
    sizes: ["12 x 10 x 8 inch", "14 x 10 x 8 inch", "16 x 12 x 10 inch", "Custom size"],
    specs: ["Size: 12 x 10 x 8 inch", "Load: up to 6 kg", "Finish: plain or single-color print"]
  },
  {
    name: "5 Ply Heavy Duty Box",
    type: "Industrial",
    description: "Safer option for machine parts, hardware, and medium-weight transport packaging.",
    imageLabel: "5 Ply",
    sizes: ["18 x 14 x 12 inch", "20 x 16 x 14 inch", "22 x 18 x 16 inch", "Custom size"],
    specs: ["Size: 18 x 14 x 12 inch", "Load: up to 18 kg", "Burst strength: reinforced"]
  },
  {
    name: "Printed Retail Carton",
    type: "Branding",
    description: "Neat display packaging for gifting, electronics accessories, or shelf-ready products.",
    imageLabel: "Print",
    sizes: ["8 x 6 x 3 inch", "10 x 8 x 4 inch", "12 x 10 x 5 inch", "Custom size"],
    specs: ["Size: custom", "Finish: printed outer surface", "Best for: retail presentation"]
  },
  {
    name: "Large Storage Corrugated Box",
    type: "Warehouse",
    description: "Designed for stacking and internal material movement in stores and warehouses.",
    imageLabel: "Store",
    sizes: ["24 x 18 x 16 inch", "26 x 20 x 18 inch", "30 x 22 x 20 inch", "Custom size"],
    specs: ["Size: 24 x 18 x 16 inch", "Load: up to 25 kg", "Use: bulk storage and relocation"]
  },
  {
    name: "Fruit and Vegetable Transport Box",
    type: "Agro Supply",
    description: "Ventilated carton format for produce movement and short-distance wholesale dispatch.",
    imageLabel: "Agro",
    sizes: ["16 x 12 x 10 inch", "18 x 14 x 10 inch", "20 x 14 x 12 inch", "Custom size"],
    specs: ["Size: custom", "Load: up to 10 kg", "Best for: agro and mandi supply"]
  },
  {
    name: "Export Corrugated Box",
    type: "Export",
    description: "Stronger outer packaging for longer-distance movement and safer handling.",
    imageLabel: "Export",
    sizes: ["20 x 16 x 16 inch", "24 x 20 x 18 inch", "28 x 24 x 20 inch", "Custom size"],
    specs: ["5 ply or higher", "Edge protection support", "Best for: export and fragile goods"]
  }
];

const productGrid = document.querySelector("#product-grid");
const sampleGallery = document.querySelector("#sample-gallery");
const productTypeSelect = document.querySelector("#productType");
const boxSizeSelect = document.querySelector("#boxSizeSelect");
const customBoxSize = document.querySelector("#customBoxSize");
const enquiryTypeSelect = document.querySelector("#enquiryType");
const quickEnquiryForm = document.querySelector("#quick-enquiry-form");
const quickProductType = document.querySelector("#quick-product-type");
const quickBoxSize = document.querySelector("#quick-box-size");
const yearElement = document.querySelector("#year");
const enquiryForm = document.querySelector("#enquiry-form");
const formNote = document.querySelector("#form-note");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const chatToggle = document.querySelector("#chat-toggle");
const chatPanel = document.querySelector("#chat-panel");
const chatClose = document.querySelector("#chat-close");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-messages");
const chatReplyButtons = document.querySelectorAll("[data-chat-reply]");

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createBoxIllustration(label, accent) {
  return `
    <div class="box-figure">
      <svg viewBox="0 0 320 210" role="img" aria-label="${escapeHtml(label)} carton box illustration">
        <defs>
          <linearGradient id="face-${accent}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fcd34d" />
            <stop offset="100%" stop-color="${accent}" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="320" height="210" fill="rgba(255,255,255,0.02)" />
        <path d="M80 90 160 50 246 86 164 126Z" fill="#fbbf24" opacity="0.92" />
        <path d="M80 90 80 156 164 194 164 126Z" fill="url(#face-${accent})" opacity="0.95" />
        <path d="M164 126 246 86 246 154 164 194Z" fill="#b45309" opacity="0.95" />
        <path d="M120 70 161 50 200 68 160 88Z" fill="#fde68a" opacity="0.96" />
        <rect x="107" y="111" width="28" height="8" rx="4" fill="#fff7ed" opacity="0.92" />
        <text x="164" y="171" fill="#fff7ed" font-size="20" text-anchor="middle" font-family="Manrope, sans-serif" font-weight="800">${escapeHtml(label)}</text>
      </svg>
    </div>
  `;
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
  const activeProduct = sampleProducts.find((product) => product.name === productName) || sampleProducts[0];
  renderSizeOptions(selectElement, activeProduct.sizes);

  if (customBoxSize) {
    const selectedSize = selectElement ? selectElement.value : "";
    customBoxSize.placeholder = selectedSize === "Custom size" ? "Enter custom size" : selectedSize || "Example: 18 x 12 x 10 inch";
  }
}

function appendChatMessage(type, text) {
  if (!chatMessages) {
    return;
  }

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function respondToChat(message) {
  const normalized = message.toLowerCase();

  if (normalized.includes("3 ply")) {
    return "3 ply carton boxes are better for lightweight products like garments, cosmetics, and retail packing.";
  }

  if (normalized.includes("5 ply") || normalized.includes("heavy")) {
    return "5 ply corrugated boxes are usually better for courier shipment, machine parts, and medium to heavy loads.";
  }

  if (normalized.includes("custom") || normalized.includes("size")) {
    return "You can select a standard size or write your custom box size in the enquiry form for a more exact quote.";
  }

  if (normalized.includes("bulk") || normalized.includes("quantity")) {
    return "For bulk quantity, share monthly requirement, product use, and box size so pricing can be planned properly.";
  }

  if (normalized.includes("print")) {
    return "Printed carton box enquiry is available. Mention whether you need plain, single-color, or multi-color printing.";
  }

  return "Please share box type, size, quantity, and use case. You can also open the enquiry form or WhatsApp for a direct quote.";
}

if (productGrid) {
  sampleProducts.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "feature-card";
    card.innerHTML = `
      ${createBoxIllustration(product.imageLabel, index % 2 === 0 ? "#ea580c" : "#b45309")}
      <span class="inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-300">${product.type}</span>
      <h3 class="mt-4 text-2xl font-bold text-white">${product.name}</h3>
      <p class="mt-3 text-sm leading-7 text-stone-300">${product.description}</p>
      <p class="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Sample specification</p>
      <ul class="mt-3 space-y-2 text-sm leading-7 text-stone-300">
        ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
      </ul>
    `;
    productGrid.appendChild(card);
  });
}

if (sampleGallery) {
  sampleProducts.forEach((product, index) => {
    const galleryCard = document.createElement("article");
    galleryCard.className = "feature-card";
    galleryCard.innerHTML = `
      ${createBoxIllustration(product.imageLabel, index % 2 === 0 ? "#f97316" : "#ca8a04")}
      <h3 class="text-xl font-bold text-white">${product.name}</h3>
      <p class="mt-3 text-sm leading-7 text-stone-300">${product.type} box sample image for enquiry and product presentation.</p>
    `;
    sampleGallery.appendChild(galleryCard);
  });
}

if (productTypeSelect) {
  sampleProducts.forEach((product, index) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${index + 1}. ${product.name}`;
    productTypeSelect.appendChild(option);
  });

  updateSelectedSizes(productTypeSelect.value, boxSizeSelect);
  productTypeSelect.addEventListener("change", () => {
    updateSelectedSizes(productTypeSelect.value, boxSizeSelect);
  });
}

if (quickProductType) {
  sampleProducts.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    quickProductType.appendChild(option);
  });

  updateSelectedSizes(quickProductType.value, quickBoxSize);
  quickProductType.addEventListener("change", () => {
    updateSelectedSizes(quickProductType.value, quickBoxSize);
  });
}

if (quickEnquiryForm) {
  quickEnquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const params = new URLSearchParams({
      productType: quickProductType ? quickProductType.value : "",
      boxSize: quickBoxSize ? quickBoxSize.value : ""
    });

    window.location.href = `enquiry.html?${params.toString()}`;
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
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
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
}

if (chatToggle && chatPanel) {
  chatToggle.addEventListener("click", () => {
    chatPanel.classList.toggle("hidden");
    chatToggle.setAttribute("aria-expanded", String(!chatPanel.classList.contains("hidden")));
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
    appendChatMessage("bot", respondToChat(message));
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
    appendChatMessage("bot", respondToChat(message));
    chatInput.value = "";
  });
}

if (enquiryForm) {
  const pageParams = new URLSearchParams(window.location.search);

  if (pageParams.get("productType") && productTypeSelect) {
    productTypeSelect.value = pageParams.get("productType");
    updateSelectedSizes(productTypeSelect.value, boxSizeSelect);
  }

  if (pageParams.get("boxSize") && boxSizeSelect) {
    const incomingSize = pageParams.get("boxSize");
    const sizeOptions = Array.from(boxSizeSelect.options).map((option) => option.value);

    if (sizeOptions.includes(incomingSize)) {
      boxSizeSelect.value = incomingSize;
    } else if (customBoxSize) {
      boxSizeSelect.value = "Custom size";
      customBoxSize.value = incomingSize;
    }
  }

  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const customerName = formData.get("customerName") || "";
    const mobileNumber = formData.get("mobileNumber") || "";
    const emailAddress = formData.get("emailAddress") || "";
    const enquiryType = formData.get("enquiryType") || "Price quotation";
    const productType = formData.get("productType") || "";
    const selectedBoxSize = formData.get("boxSizeSelect") || "Not specified";
    const customSize = formData.get("boxSize") || "";
    const boxSize = selectedBoxSize === "Custom size" ? customSize || "Custom size" : selectedBoxSize;
    const quantity = formData.get("quantity") || "";
    const printing = formData.get("printing") || "";
    const message = formData.get("message") || "Not specified";

    const subject = encodeURIComponent(`${enquiryType} for ${productType}`);
    const body = encodeURIComponent(
      [
        "Hello Anshika Enterprises,",
        "",
        `Name / Company: ${customerName}`,
        `Mobile Number: ${mobileNumber}`,
        `Email Address: ${emailAddress || "Not provided"}`,
        `Enquiry Type: ${enquiryType}`,
        `Product Type: ${productType}`,
        `Box Size: ${boxSize}`,
        `Quantity Required: ${quantity}`,
        `Printing Requirement: ${printing}`,
        `Use Case: ${message}`,
        "",
        "Please share price and availability."
      ].join("\n")
    );

    window.location.href = `mailto:anshikaenterprise770@gmail.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Email draft prepared. If no email app opens, call the numbers above for a direct quote.";
    }
  });
}
