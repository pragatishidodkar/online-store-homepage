const container = document.getElementById("productContainer");

let currentCategory = "All";
let currentSearch = "";
let currentSort = "";
let currentPrice = "";
let currentRating = "";


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

// Price
if(currentPrice === "low"){
result = result.filter(p => p.price < 500);
}
else if(currentPrice === "mid"){
result = result.filter(p => p.price >= 500 && p.price <= 2000);
}
else if(currentPrice === "high"){
result = result.filter(p => p.price > 2000);
}

// Rating
if(currentRating){
result = result.filter(p => p.rating >= currentRating);
}

// Sorting
if(currentSort === "low"){
result.sort((a,b)=>a.price - b.price);
}
else if(currentSort === "high"){
result.sort((a,b)=>b.price - a.price);
}
else if(currentSort === "rating"){
result.sort((a,b)=>b.rating - a.rating);
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

// Price filter
function filterPrice(type){
currentPrice = type;
applyFilters();
}

// Rating filter
function filterRating(value){
currentRating = Number(value);
applyFilters();
}


// Initial load
applyFilters();
