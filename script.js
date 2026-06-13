// ===============================
// PARADISE STORE - SCRIPT JS
// ===============================

// PANIER
let cart = [];
const cartCount = document.getElementById("cart-count");

// =====================
// AJOUT AU PANIER
// =====================
document.querySelectorAll(".add-cart").forEach(function (btn) {
    btn.addEventListener("click", function () {

        const card = this.closest(".card");

        if (!card) {
            console.log("Carte introuvable");
            return;
        }

        const nameEl = card.querySelector("h3");
        const priceEl = card.querySelector("span");

        if (!nameEl || !priceEl) {
            console.log("Produit incomplet");
            return;
        }

        const name = nameEl.textContent;
        const priceText = priceEl.textContent;

        let price = 0;

        // extraire le prix $
        if (priceText.includes("$")) {
            price = parseFloat(priceText.split("$")[1]);
        }

        cart.push({ name, price });

        cartCount.innerText = cart.length;

        console.log("Panier:", cart);

        alert(name + " ajouté au panier 🛒");
    });
});

// =====================
// MODE SOMBRE
// =====================
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });
}

// =====================
// RECHERCHE
// =====================
const search = document.getElementById("searchInput");

if (search) {
    search.addEventListener("input", function () {

        let value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(function (card) {
            let text = card.textContent.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });

    });
}

// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle && navLinks){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}