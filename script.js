const container = document.getElementById("productContainer");

let currentCategory = "All";
let currentSearch = "";
let currentSort = "";

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

function applyFilters(){

let result = [...products];

// Category
if(currentCategory !== "All"){
result = result.filter(p => p.category === currentCategory);
}

// Search
if(currentSearch){
result = result.filter(p =>
p.name.toLowerCase().includes(currentSearch)
);
}

// Sorting
if(currentSort === "low"){
result.sort((a,b)=>a.price - b.price);
}
else if(currentSort === "high"){
result.sort((a,b)=>b.price - a.price);
}

displayProducts(result);

}

// Category
function filterCategory(category){
currentCategory = category;
applyFilters();
}

// Search
document.getElementById("search").addEventListener("input",(e)=>{
currentSearch = e.target.value.toLowerCase();
applyFilters();
});

// Sorting
function sortProducts(type){
currentSort = type;
applyFilters();
}

// Load
applyFilters();
function placeOrder(product){

fetch("http://localhost:5000/api/order", {

method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
productName: product.name,
price: product.price,
quantity: 1
})

})
.then(res => res.json())
.then(data => alert("Order Placed Successfully"))

}
