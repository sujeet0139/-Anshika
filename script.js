const sampleProducts = [
  {
    name: "3 Ply Shipping Carton",
    type: "E-commerce",
    description: "Lightweight outer box for apparel, cosmetics, and daily dispatch items.",
    specs: ["Size: 12 x 10 x 8 inch", "Load: up to 6 kg", "Finish: plain or single-color print"]
  },
  {
    name: "5 Ply Heavy Duty Box",
    type: "Industrial",
    description: "Safer option for machine parts, hardware, and medium-weight transport packaging.",
    specs: ["Size: 18 x 14 x 12 inch", "Load: up to 18 kg", "Burst strength: reinforced"]
  },
  {
    name: "Printed Retail Carton",
    type: "Branding",
    description: "Neat display packaging for gifting, electronics accessories, or shelf-ready products.",
    specs: ["Size: custom", "Finish: printed outer surface", "Best for: retail presentation"]
  },
  {
    name: "Large Storage Corrugated Box",
    type: "Warehouse",
    description: "Designed for stacking and internal material movement in stores and warehouses.",
    specs: ["Size: 24 x 18 x 16 inch", "Load: up to 25 kg", "Use: bulk storage and relocation"]
  },
  {
    name: "Fruit and Vegetable Transport Box",
    type: "Agro Supply",
    description: "Ventilated carton format for produce movement and short-distance wholesale dispatch.",
    specs: ["Size: custom", "Load: up to 10 kg", "Best for: agro and mandi supply"]
  },
  {
    name: "Export Corrugated Box",
    type: "Export",
    description: "Stronger outer packaging for longer-distance movement and safer handling.",
    specs: ["5 ply or higher", "Edge protection support", "Best for: export and fragile goods"]
  }
];

const productGrid = document.querySelector("#product-grid");
const productTypeSelect = document.querySelector("#productType");
const yearElement = document.querySelector("#year");
const enquiryForm = document.querySelector("#enquiry-form");
const formNote = document.querySelector("#form-note");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (productGrid) {
  sampleProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "feature-card";
    card.innerHTML = `
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

if (productTypeSelect) {
  sampleProducts.forEach((product, index) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${index + 1}. ${product.name}`;
    productTypeSelect.appendChild(option);
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

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const customerName = formData.get("customerName") || "";
    const mobileNumber = formData.get("mobileNumber") || "";
    const emailAddress = formData.get("emailAddress") || "";
    const productType = formData.get("productType") || "";
    const boxSize = formData.get("boxSize") || "Not specified";
    const quantity = formData.get("quantity") || "";
    const printing = formData.get("printing") || "";
    const message = formData.get("message") || "Not specified";

    const subject = encodeURIComponent(`Enquiry for ${productType}`);
    const body = encodeURIComponent(
      [
        "Hello Anshika Enterprises,",
        "",
        `Name / Company: ${customerName}`,
        `Mobile Number: ${mobileNumber}`,
        `Email Address: ${emailAddress || "Not provided"}`,
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
