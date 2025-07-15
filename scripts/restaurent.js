function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

const modal = document.getElementById("cartModal");
const span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', function () {
    const itemName = this.parentElement.querySelector('.hotel-name').textContent;
    const itemPrice = parseFloat(this.dataset.price);

    addToCart(itemName, itemPrice, 1);
    modal.style.display = "block";
  });
});

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let cart = [];

function addToCart(name, price, quantity) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    cart.push({ name, price, quantity, total: price * quantity });
  }

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  let cartTotal = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      cartTotal += item.total;

      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");

      itemDiv.innerHTML = `
          <div>${item.name}</div>
          <div class="quantity-controls">
            <button onclick="updateQuantity('${item.name}', -1)">-</button>
            <div>${item.quantity}</div>
            <button onclick="updateQuantity('${item.name}', 1)">+</button>
          </div>
          <div>Rs ${item.total}</div>
        `;

      cartItemsContainer.appendChild(itemDiv);
    });
  }

  const cartTotalElement = document.getElementById("cartTotal");
  cartTotalElement.textContent = `Total: Rs ${cartTotal}`;
}

function updateQuantity(name, change) {
  const item = cart.find(item => item.name === name);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      cart = cart.filter(item => item.name !== name);
    } else {
      item.total = item.price * item.quantity;
    }

    updateCartDisplay();
  }
}

document.getElementById("cartBtn").addEventListener('click', function () {
  modal.style.display = "block";
});

function checkout() {
  alert('Ordered Successfully!');
  cart = [];
  updateCartDisplay();
  modal.style.display = "none";
}