const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 299, image: "./Images/Iphone.jpeg" },
    { id: 2, name: "Laptop", category: "electronics", price: 999, image: "./Images/Jeans.jpeg" },
    { id: 3, name: "Jeans", category: "fashion", price: 49, image: "./Images/macbook.jpeg" },
    { id: 4, name: "Sofa", category: "home", price: 199, image: "./Images/Sofa.jpeg" },
    { id: 5, name: "Headphones", category: "electronics", price: 99, image: "./Images/Tshirt.jpeg" },
    { id: 6, name: "T-shirt", category: "fashion", price: 19, image: "./Images/Headphone.jpeg" },
];

let cart = [];

const displayProducts = (productList) => {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = productList.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
};

const addToCart = (id) => {
    const product = products.find(item => item.id === id);
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
    alert(`${product.name} added to cart!`);
};

const filterProducts = () => {
    const filters = Array.from(document.querySelectorAll(".filter:checked")).map(input => input.value);
    const filteredProducts = filters.length > 0 
        ? products.filter(product => filters.includes(product.category)) 
        : products;
    displayProducts(filteredProducts);
};

document.getElementById("search").addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
});

document.querySelectorAll(".filter").forEach(filter => 
    filter.addEventListener("change", filterProducts)
);

displayProducts(products);
