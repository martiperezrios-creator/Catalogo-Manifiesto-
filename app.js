const products = [
  { name: "Brasil Bourbon", image: "assets/final-catalog/cafe-estetica-grande/BRASIL BOURBON.png", methods: ["espresso"], profile: "clasicos", price250: "$13.000", price1000: "$36.000" },
  { name: "Brasil Sertao", image: "assets/final-catalog/cafe-estetica-grande/BRASIL SERTAO.png", methods: ["espresso"], profile: "clasicos", price250: "$15.000", price1000: "$40.000" },
  { name: "Colombia Descafeinado", image: "assets/final-catalog/cafe-estetica-grande/COLOMBIA DESCAFEINADO.png", methods: ["espresso", "filtrado"], profile: "clasicos", price250: "$15.000", price1000: "$42.000" },
  { name: "Colombia Geisha Natural", image: "assets/final-catalog/cafe-estetica-grande/COLOMBIA GEISHA NATURAL.png", methods: ["filtrado"], profile: "complejos", price250: "$19.000", price1000: "$65.000" },
  { name: "Colombia La Esmeralda", image: "assets/final-catalog/cafe-estetica-grande/COLOMBIA LA ESMERALDA.png", methods: ["espresso", "filtrado"], profile: "complejos", price250: "$19.000", price1000: "$65.000" },
  { name: "Colombia Pasión", image: "assets/final-catalog/cafe-estetica-grande/COLOMBIA PASION.png", methods: ["filtrado"], profile: "frutales", price250: "$19.000" },
  { name: "Colombia Rio Blanco", image: "assets/final-catalog/cafe-estetica-grande/COLOMBIA RIO BLANCO.png", methods: ["espresso", "filtrado"], profile: "complejos", price250: "$20.000" },
  { name: "Colombia Huila", image: "assets/final-catalog/cafe-estetica-grande/COLOMBIA HUILA.png", methods: ["espresso", "filtrado"], profile: "balanceados", price250: "$15.000", price1000: "$42.000" },
  { name: "Etiopia Nancebo", image: "assets/final-catalog/cafe-estetica-grande/ETIOPIA NANCEBO.png", methods: ["filtrado"], profile: "frutales", price250: "$19.000" },
  { name: "Honduras Piedra Habladora", image: "assets/final-catalog/cafe-estetica-grande/HONDURAS PIEDRA HABLADORA.png", methods: ["espresso"], profile: "clasicos", price250: "$15.000", price1000: "$40.000" },
  { name: "Indonesia Sunda Badak", image: "assets/final-catalog/cafe-estetica-grande/INDONESIA SUNDA BADAK.png", methods: ["filtrado"], profile: "complejos", price250: "$15.000", price1000: "$74.900" },
  { name: "Manifiesto Blend I", image: "assets/final-catalog/cafe-estetica-grande/MANIFIESTO BLEND I.png", methods: ["espresso"], profile: "clasicos", price250: "$13.000", price1000: "$40.000" },
  { name: "Manifiesto Blend II", image: "assets/final-catalog/cafe-estetica-grande/MANIFIESTO BLEND II.png", methods: ["espresso"], profile: "clasicos", price250: "$13.000", price1000: "$36.000" },
  { name: "Perú Caracolillo", image: "assets/final-catalog/cafe-estetica-grande/PERU CARACOLILLO.png", methods: ["filtrado"], profile: "balanceados", price250: "$19.000", price1000: "$36.000" },
  { name: "Tanzania Luwi", image: "assets/final-catalog/cafe-estetica-grande/TANZANIA LUWI.png", methods: ["filtrado"], profile: "frutales", price250: "$15.000", price1000: "$44.000" }
];

const extras = [
  { name: "Azúcar", image: "assets/final-catalog/EXTRAS AZUCAR.png", description: "Sobres individuales", priceLabel: "Por 1000 unidades", price: "$33.178" },
  { name: "Edulcorante", image: "assets/final-catalog/EXTRAS EDULCORANTE.png", description: "Bajas calorías", priceLabel: "Por 400 unidades", price: "$7.650" },
  { name: "Matcha Atypico", image: "assets/final-catalog/EXTRAS MATCHA ATYPICO.png", description: "Pack 50 g", priceLabel: "Por 50 g", price: "$18.000" },
  { name: "Leche de Almendras Amande", image: "assets/final-catalog/EXTRAS AMND LANE.png", description: "Bebida de almendras", price: "$32.202", className: "extra-amande" },
  { name: "Oatly", image: "assets/final-catalog/EXTRAS OATLY.jpg", description: "Bebida vegetal", price: "$49.090", className: "extra-oatly" },
  { name: "Water Coffee", image: "assets/final-catalog/EXTRAS WATER COFFEE.jpg", description: "Agua para café" },
  { name: "Rinza", image: "assets/final-catalog/EXTRAS RINZA.png", description: "Limpieza de máquina", price: "$51.595", className: "extra-cleaning" },
  { name: "Cafiza", image: "assets/final-catalog/EXTRAS CAFIZA.png", description: "Limpieza de espresso", price: "$38.530", className: "extra-cleaning extra-cafiza" },
  { name: "Grindz", image: "assets/final-catalog/EXTRAS GRINDZ.png", description: "Limpieza de molino", price: "$75.196", className: "extra-cleaning" },
  { name: "Filtros V60", image: "assets/final-catalog/EXTRAS FILTROS V60.jpg", description: "Filtros de papel", price: "$20.082" },
  { name: "Filtros Chemex", image: "assets/final-catalog/EXTRAS FILTROS CHEMEX.jpg", description: "Filtros de papel", price: "$46.860" },
  { name: "Filtros Aeropress", image: "assets/final-catalog/EXTRAS FILTROS AEROPRESS 3D.png", description: "Filtros de papel", price: "$20.082" },
  { name: "Dripper de Vidrio", image: "assets/final-catalog/EXTRAS DOMESTIC DRIPPER.png", description: "Domestic Bloom", price: "$29.008" },
  { name: "Coffee Server", image: "assets/final-catalog/EXTRAS DOMESTIC COFFEE SERVER.png", description: "Domestic Bloom", price: "$18.967" }
];

const accessories = [
  { name: "Pitcher", image: "assets/final-catalog/ACCESORIOS PITCHER 12 OZ.png", description: "Dos tamaños disponibles", priceLines: [{ label: "12 oz", price: "$14.132" }, { label: "20 oz", price: "$19.356" }] },
  { name: "Silicon Mat", image: "assets/final-catalog/ACCESORIOS SILICON MAT.jpeg", description: "Accesorio barista", price: "$21.000" },
  { name: "Tamper", image: "assets/final-catalog/ACCESORIOS TAMPER.png", description: "Accesorio barista", price: "$50.000" }
];

const grid = document.querySelector("#product-grid");
const count = document.querySelector("#product-count");
const filters = document.querySelectorAll(".filter");
const profileFilters = document.querySelectorAll(".subfilter");
const subfilters = document.querySelector("#coffee-subfilters");
const extrasGrid = document.querySelector("#extras-grid");
const accessoriesGrid = document.querySelector("#accessories-grid");

const state = {
  method: "todos",
  profile: "todos"
};

function methodLabel(methods) {
  if (methods.length === 2) return "Espresso · Filtrado";
  return methods[0] === "espresso" ? "Espresso" : "Filtrado";
}

function profileLabel(profile) {
  const labels = {
    clasicos: "Clásicos y chocolatosos",
    frutales: "Frutales y dulces",
    balanceados: "Balanceados",
    complejos: "Complejos"
  };

  return labels[profile] || "";
}

function imagePath(image) {
  return image.startsWith("assets/") ? image : `assets/products/${image}`;
}

function priceMarkup(item) {
  const lines = item.priceLines || (item.price ? [{ label: item.priceLabel || "", price: item.price }] : []);
  if (!lines.length) return "";

  return `
    <div class="item-prices" aria-label="Precios más IVA">
      ${lines.map((line) => `
        <span>
          ${line.label ? `<small>${line.label}</small>` : ""}
          <strong>${line.price}</strong>
        </span>
      `).join("")}
      <em>+ IVA</em>
    </div>
  `;
}

function render() {
  const visible = products.filter((product) => {
    const matchesMethod = state.method === "todos" || product.methods.includes(state.method);
    const matchesProfile = state.profile === "todos" || product.profile === state.profile;
    return matchesMethod && matchesProfile;
  });

  grid.innerHTML = visible.map((product, index) => `
    <article class="product-card profile-${product.profile}" style="animation-delay:${index * 35}ms">
      <div class="card-image">
        <img src="${encodeURI(imagePath(product.image))}" alt="${product.name}" loading="lazy" />
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="card-info">
        <div>
          <h3>${product.name}</h3>
          <p>${methodLabel(product.methods)}</p>
          <small>${profileLabel(product.profile)}</small>
        </div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
      <div class="card-prices" aria-label="Precios más IVA">
        <span><small>250 g</small><strong>${product.price250}</strong></span>
        <span><small>1 kg</small><strong>${product.price1000 || "Consultar"}</strong></span>
        <em>+ IVA</em>
      </div>
    </article>
  `).join("");

  count.textContent = visible.length;
}

function renderExtras() {
  if (!extrasGrid) return;

  extrasGrid.innerHTML = extras.map((extra, index) => `
    <article class="complement-card ${extra.className || ""}">
      <div class="complement-image">
        <img src="${encodeURI(extra.image)}" alt="${extra.name}" loading="lazy" />
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <h3>${extra.name}</h3>
        <p>${extra.description}</p>
      </div>
      ${priceMarkup(extra)}
    </article>
  `).join("");
}

function renderAccessories() {
  if (!accessoriesGrid) return;

  accessoriesGrid.innerHTML = accessories.map((accessory, index) => `
    <article class="accessory-card">
      <div class="accessory-image">
        <img src="${encodeURI(accessory.image)}" alt="${accessory.name}" loading="lazy" />
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <h3>${accessory.name}</h3>
        <p>${accessory.description}</p>
      </div>
      ${priceMarkup(accessory)}
    </article>
  `).join("");
}

function updateSubfilters() {
  const showProfiles = state.method === "espresso" || state.method === "filtrado";
  subfilters.hidden = !showProfiles;
  subfilters.setAttribute("aria-hidden", String(!showProfiles));

  if (!showProfiles) {
    state.profile = "todos";
    profileFilters.forEach((item) => {
      const selected = item.dataset.profile === "todos";
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
  }
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    state.method = button.dataset.filter;
    updateSubfilters();
    render();
  });
});

profileFilters.forEach((button) => {
  button.addEventListener("click", () => {
    profileFilters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    state.profile = button.dataset.profile;
    render();
  });
});

render();
renderExtras();
renderAccessories();
