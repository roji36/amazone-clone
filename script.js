const products = [
    { id: 1, name: "Wireless Headphone", price: 2000, image: "images/headphone.jpg" },
    { id: 2, name: "iPhone 17 Pro Max", price: 250000, image: "images/phone.jpg" },
    { id: 2, name: "iWatch", price: 89000, image: "images/iWatch.jpg" },
    { id: 2, name: "Speaker", price: 1000, image: "images/speaker.jpg" },
    { id: 2, name: "Macbook Pro M4", price:349000, image: "images/laptop.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProduct() {
    const list = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div")
        div.className = "product";
        div.innerHTML = `
        <img src ="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(id){
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}
function updateCartCount(){
    document.getElementById("cart-count").textContent =  cart.length;
}
renderProduct();
updateCartCount();
0