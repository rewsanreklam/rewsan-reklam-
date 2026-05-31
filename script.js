const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const filterButtons = document.querySelectorAll("[data-filter]");
const productGrid = document.querySelector("[data-products]");
const frameProductsAnchor = document.querySelector("[data-frame-products]");
let productCards = document.querySelectorAll("[data-category]");
const productSelect = document.querySelector("[data-product-select]");
const quoteForm = document.querySelector("[data-quote-form]");
const formStatus = document.querySelector("[data-form-status]");
let productLinks = document.querySelectorAll("[data-product-link]");
const categoryLinks = document.querySelectorAll("[data-filter-link]");
const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("#site-search");

const frameProducts = [
  ["Kalpli Gül Fanuslu LED Çerçeve", "Işıklı gül fanusu ve dönebilen kalp fotoğraf alanıyla romantik masa üstü hediye.", "frame-01.jpeg"],
  ["İkili Love LED Fotoğraf Çerçevesi", "İki fotoğraf alanı ve orta love tasarımıyla çiftlere özel ışıklı çerçeve.", "frame-02.jpeg"],
  ["Ahşap Kalpli Saatli LED Çerçeve", "Kalp fotoğraf alanı, LED ışık ve dijital saat göstergeli ahşap tasarım.", "frame-03.jpeg"],
  ["Gül Küp Lambalı Fotoğraf Çerçevesi", "Işıklı gül küp lamba ve üst fotoğraf alanını birlikte sunan ahşap masa ürünü.", "frame-04.jpeg"],
  ["Kalpli Güllü Ahşap LED Çerçeve", "Kalp fotoğraf bölümü ve gül baskılı yan çerçevesiyle özel gün hediyesi.", "frame-05.jpeg"],
  ["Kristal Tabanlı Ahşap Fotoğraf Lambası", "Ahşap gövde, ışıklı kristal taban ve fotoğraf alanıyla dekoratif lamba.", "frame-06.jpeg"],
  ["Gül Fanuslu Romantik LED Çerçeve", "USB ile çalışan gül fanusu ve kare fotoğraf alanıyla romantik hediye seti.", "frame-07.jpeg"],
  ["Masa Üstü Gül Fanuslu Fotoğraf Çerçevesi", "Fotoğraf çerçevesi ve ışıklı gül fanusunu aynı ahşap tabanda birleştirir.", "frame-08.jpeg"],
  ["Taşlı Mr & Mrs LED Çerçeve", "Taşlı parlak kenar, LED ışık ve Mr & Mrs yazısıyla düğün hediyesi modeli.", "frame-09.jpeg"],
  ["Taşlı Masa Aynalı Çerçeve", "Taşlı kenarlı masa üstü ayna görünümüyle şık dekoratif çerçeve.", "frame-10.jpeg"],
  ["Ahşap Saatli LED Fotoğraf Çerçevesi", "Dikdörtgen fotoğraf alanı, LED ışık ve dijital saat göstergeli ahşap model.", "frame-11.jpeg"],
  ["Hilal Ay Askılı Yuvarlak Çerçeve", "Gold hilal ay formu ve yuvarlak askılı fotoğraf alanıyla ışıklı masa çerçevesi.", "frame-12.jpeg"],
  ["Hilal Ay Kalpli Askılı LED Çerçeve", "Hilal ay gövde içinde kalpli askılı fotoğraf alanı bulunan modern LED ürün.", "frame-13.jpeg"],
  ["Şarjlı Dikdörtgen LED Fotoğraf Çerçevesi", "USB bağlantılı, dikdörtgen ışıklı fotoğraf çerçevesi ve masa standı.", "frame-14.jpeg"],
  ["Kalpli Gold LED Fotoğraf Çerçevesi", "Gold tabanlı, kristal kalp görünümlü ve sıcak ışıklı romantik çerçeve.", "frame-15.jpeg"],
  ["Çocuk Odası Gül Fanuslu LED Çerçeve", "Renkli gül fanusu ve fotoğraf alanıyla çocuk odası için ışıklı hediye.", "frame-16.jpeg"],
  ["Yuvarlak Siyah Halka LED Çerçeve", "Siyah halka formu, beyaz taban ve yuvarlak fotoğraf alanıyla modern tasarım.", "frame-17.jpeg"],
  ["Siyah Kalp LED Fotoğraf Çerçevesi", "Siyah kalp dış formu ve aydınlatmalı iç fotoğraf alanıyla sade model.", "frame-18.jpeg"],
  ["Kalpli Kristal LED Fotoğraf Çerçevesi", "Kristal kalp gövde, gold taban ve sıcak LED ışığıyla dikkat çeken model.", "frame-19.jpeg"],
  ["Mezuniyet Temalı Kalp LED Çerçeve", "Mezuniyet, okul ve özel başarı anıları için kalp formlu ışıklı çerçeve.", "frame-20.jpeg"],
  ["Çift Kalpli Gold LED Çerçeve", "Dış kalp ışığı ve iç askılı kalp fotoğraf alanıyla gold masa çerçevesi.", "frame-21.jpeg"],
  ["Anneler Günü Kalp LED Çerçeve", "Anne ve çocuk fotoğrafları için yazılı, kalp formlu ve ışıklı hediye modeli.", "frame-22.jpeg"],
  ["Güneş Model Oval LED Çerçeve", "Kristal güneş formu, oval fotoğraf alanı ve gold tabanıyla parlak tasarım.", "frame-23.jpeg"],
  ["Hilal Ay Kalpli Gold LED Çerçeve", "Hilal ay gövde ve kalp fotoğraf alanını sıcak ışıkla öne çıkaran model.", "frame-24.jpeg"],
  ["Hilal Ay Askılı Dikdörtgen Çerçeve", "Hilal ay gövde içinde askılı dikdörtgen fotoğraf alanı bulunan LED çerçeve.", "frame-25.jpeg"],
  ["Beyaz Tabanlı Kalp LED Çerçeve", "Beyaz tabanlı kristal kalp formu ve romantik LED aydınlatmalı fotoğraf ürünü.", "frame-26.jpeg"],
  ["Kare Askılı Gold LED Çerçeve", "Kare dış çerçeve, askılı yuvarlak fotoğraf alanı ve gold tabanlı tasarım.", "frame-27.jpeg"],
  ["Dokunmatik Kare Kalpli LED Çerçeve", "Dokunmatik düğmeli kare dış form ve askılı kalp fotoğraf alanı.", "frame-28.jpeg"],
  ["Kalpli Gold LED Çerçeve ve Küre Lamba", "Kalpli çerçeveyle birlikte dekoratif ışıklı küre detayı bulunan özel model.", "frame-29.jpeg"],
  ["Taşlı Çift Alanlı LED Çerçeve", "Fotoğraf ve özel baskı alanını birlikte sunan taşlı dikdörtgen LED çerçeve.", "frame-30.jpeg"],
  ["Yuvarlak Askılı LED Fotoğraf Çerçevesi", "Yuvarlak kristal gövde ve askılı fotoğraf alanıyla masa üstü ışıklı ürün.", "frame-31.jpeg"],
  ["Bebek Fotoğraflı Taşlı LED Çerçeve", "Bebek ve aile fotoğrafları için taşlı, ışıklı ve gold tabanlı masa çerçevesi.", "frame-32.jpeg"],
  ["Love Kolaj LED Fotoğraf Çerçevesi", "Birden fazla fotoğraf alanı ve love detaylarıyla kolaj görünümlü ışıklı çerçeve.", "frame-33.jpeg"],
  ["Güllü Kare LED Fotoğraf Çerçevesi", "Kare form, LED ışık ve kırmızı gül süslemeleriyle romantik fotoğraf çerçevesi.", "frame-34.jpeg"],
  ["Kalpli Love Gölge Kutusu Çerçeve", "Kalp fotoğraf alanı, love yazısı ve dekoratif obje detaylarıyla kutu çerçeve.", "frame-35.jpeg"],
  ["Kalp Kristal Gold LED Çerçeve", "Gold tabanlı, sıcak ışıklı ve kristal dokulu kalp fotoğraf çerçevesi.", "frame-36.jpeg"],
  ["Yatay Love LED Fotoğraf Çerçevesi", "Yatay fotoğraf alanı, love yazısı ve sıcak LED aydınlatmalı masa çerçevesi.", "frame-37.jpeg"],
];

const renderFrameProducts = () => {
  if (!productGrid || !frameProductsAnchor) return;

  const cards = frameProducts
    .map(([title, description, image]) => `
          <article class="product-card" data-category="hediyelik cerceve baski led">
            <div class="product-media">
              <img src="./assets/frames/${image}" alt="${title}" loading="lazy">
            </div>
            <div class="product-body">
              <span class="product-kicker">Resim çerçevesi</span>
              <h3>${title}</h3>
              <p>${description}</p>
              <a href="#teklif" data-product-link="${title}">Teklif iste</a>
            </div>
          </article>`)
    .join("");

  frameProductsAnchor.insertAdjacentHTML("beforebegin", cards);
};

renderFrameProducts();
productCards = document.querySelectorAll("[data-category]");
productLinks = document.querySelectorAll("[data-product-link]");

const closeMenu = () => {
  header.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

const applyFilter = (filter) => {
  filterButtons.forEach((item) => {
    const isCurrent = item.dataset.filter === filter;
    item.classList.toggle("is-active", isCurrent);
    item.setAttribute("aria-selected", String(isCurrent));
  });

  productCards.forEach((card) => {
    const categories = card.dataset.category.split(" ");
    card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    applyFilter(link.dataset.filterLink);
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");

  filterButtons.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.filter === "all" && !query);
    item.setAttribute("aria-selected", String(item.dataset.filter === "all" && !query));
  });

  productCards.forEach((card) => {
    const text = card.textContent.toLocaleLowerCase("tr-TR");
    card.classList.toggle("is-hidden", Boolean(query) && !text.includes(query));
  });
});

productCards.forEach((card) => {
  const title = card.querySelector("h3")?.textContent.trim();

  if (title && productSelect) {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    productSelect.appendChild(option);
  }
});

productLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (productSelect) {
      productSelect.value = link.dataset.productLink;
    }
  });
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get("name") || "Talebiniz";
  formStatus.textContent = `${name} için teklif talebi alındı. Rewşan ekibi kısa süre içinde dönüş yapacak.`;
  quoteForm.reset();
});
