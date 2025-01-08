document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const cartItemsEl = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    const updateCartUI = () => {
        cartItemsEl.innerHTML = "";
        let total = 0;

        for (const [id, item] of Object.entries(cart)) {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div>${item.name}</div>
                        <div class="quantity-controls">
                            <button class="decrease" data-id="${id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase" data-id="${id}">+</button>
                        </div>
                    </div>
                </div>
                <div class="cart-item-price">${item.price * item.quantity} JD</div>
                <button class="remove-item" data-id="${id}">X</button>
            `;
            cartItemsEl.appendChild(cartItem);
            total += item.price * item.quantity;
        }

        totalPriceEl.textContent = total;
    };

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const id = product.dataset.id;
            const name = product.dataset.name;
            const price = parseInt(product.dataset.price, 10);
            const image = product.dataset.image;

            if (cart[id]) {
                cart[id].quantity++;
            } else {
                cart[id] = { name, price, image, quantity: 1 };
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        });
    });

    cartItemsEl.addEventListener("click", (e) => {
        const id = e.target.dataset.id;

        if (e.target.classList.contains("remove-item")) {
            delete cart[id];
        } else if (e.target.classList.contains("increase")) {
            cart[id].quantity++;
        } else if (e.target.classList.contains("decrease")) {
            if (cart[id].quantity > 1) {
                cart[id].quantity--;
            } else {
                delete cart[id];
            }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    });

    document.getElementById("save-cart").addEventListener("click", () => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
        alert("Cart saved to session storage!");
    });

    updateCartUI();
});