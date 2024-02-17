document.addEventListener('DOMContentLoaded', function () {
    // Sample data for initial cart items with images
    const cartItems = [
        { id: 1, name: 'Product A', price: 10, quantity: 2, image: 'src/images.jpg' },
        { id: 2, name: 'Product B', price: 20, quantity: 1, image: 'src/2.jpg' },
        
        // Add more items as needed
    ];

    const cartContainer = document.getElementById('cart');

    // Function to render cart items
    function renderCart() {
        cartContainer.innerHTML = ''; // Clear the cart container

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="removeItem(${item.id})">Remove</button>
                <button onclick="likeItem(${item.id})" class="${item.liked ? 'like' : ''}">❤️</button>
                <span>Total: $${item.price * item.quantity}</span>
            `;

            cartContainer.appendChild(cartItemElement);
        });
    }

    // Function to decrease item quantity
    window.decreaseQuantity = function (itemId) {
        const item = cartItems.find(item => item.id === itemId);
        if (item && item.quantity > 1) {
            item.quantity--;
            renderCart();
        }
    };

    // Function to increase item quantity
    window.increaseQuantity = function (itemId) {
        const item = cartItems.find(item => item.id === itemId);
        if (item) {
            item.quantity++;
            renderCart();
        }
    };

    // Function to remove item from the cart
    window.removeItem = function (itemId) {
        const index = cartItems.findIndex(item => item.id === itemId);
        if (index !== -1) {
            cartItems.splice(index, 1);
            renderCart();
        }
    };

    // Function to like an item
    window.likeItem = function (itemId) {
        const item = cartItems.find(item => item.id === itemId);
        if (item) {
            item.liked = !item.liked;
            renderCart();
        }
    };

    // Initial rendering of the cart
    renderCart();
});
