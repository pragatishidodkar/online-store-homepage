const container = document.getElementById("productContainer");

let allProducts = [];

let currentCategory = "All";
let currentSearch = "";
let currentSort = "";
let currentPrice = "";
let currentRating = "";

// Fetch products
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
allProducts = data;
applyFilters();
});

// Display
function displayProducts(list){

container.innerHTML = "";

list.forEach(product => {

const card = document.createElement("div");

card.classList.add("product-card");

card.innerHTML = `
<img src="${product.image}">
<h3>${product.title}</h3>
<p>$${product.price}</p>
<p class="rating">${"⭐".repeat(Math.round(product.rating.rate))}</p>
<button>Add to Cart</button>
`;

container.appendChild(card);

});

}


// Main filter system
function applyFilters(){

let result = [...allProducts];

// Category
if(currentCategory !== "All"){
result = result.filter(p => p.category === currentCategory);
}

// Search
if(currentSearch){
result = result.filter(p =>
p.title.toLowerCase().includes(currentSearch)
);
}

// Sorting
if(currentSort === "low"){
result.sort((a,b)=>a.price - b.price);
}
else if(currentSort === "high"){
result.sort((a,b)=>b.price - a.price);
}
else if(currentSort === "rating"){
result.sort((a,b)=>b.rating.rate - a.rating.rate);
}

displayProducts(result);

}


// Category filter
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
