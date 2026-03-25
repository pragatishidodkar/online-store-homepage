const container = document.getElementById("productContainer");

function displayProducts(list){

container.innerHTML = "";

list.forEach(product => {

const card = document.createElement("div");

card.classList.add("product-card");

card.innerHTML = `

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p class="rating">${"⭐".repeat(product.rating)}</p>

<button>Add to Cart</button>

`;

container.appendChild(card);

});

}

displayProducts(products);
function filterCategory(category){

if(category === "All"){

displayProducts(products);

return;

}

const filtered = products.filter(product => product.category === category);

displayProducts(filtered);

}
