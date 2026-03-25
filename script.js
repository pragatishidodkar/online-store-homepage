let currentCategory = "All";
let currentSearch = "";
let currentSort = "";
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
function sortProducts(type){

let sorted = [...products];

if(type === "low"){

sorted.sort((a,b)=>a.price - b.price);

}

else if(type === "high"){

sorted.sort((a,b)=>b.price - a.price);

}

else if(type === "rating"){

sorted.sort((a,b)=>b.rating - a.rating);

}

displayProducts(sorted);

}
document.getElementById("search").addEventListener("input",(e)=>{

const term = e.target.value.toLowerCase();

const filtered = products.filter(product =>
product.name.toLowerCase().includes(term)
);

displayProducts(filtered);

});
function applyFilters(){

let result = [...products];


// Category filter
if(currentCategory !== "All"){
result = result.filter(p => p.category === currentCategory);
}


// Search filter
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

else if(currentSort === "rating"){
result.sort((a,b)=>b.rating - a.rating);
}

displayProducts(result);

}
