console.log(products)
let filteredProducts =[...products]
console.log(filteredProducts)

// SELECTORS
const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")
const priceForm = document.querySelector(".price-form")
const priceInput = document.querySelector(".price-input")
const currentPrice = document.querySelector("#current-price")

searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    filteredProducts = products.filter(product => {
        return product.title.includes(searchTerm)
    })
    displayProducts()
})

// Loop and display each product
function displayProducts() {
    // A map allows you to access object easier
    // .map returns an array which can be put into the DOM
    // .forEach doesn't return anything, so it all gets discarded  
    productsContainer.innerHTML = filteredProducts.map(product => {
        // Return the HMTL for each product
        return `<article class="product">
                    <img src="${product.image}" alt="" />
                    <footer>
                        <div class="product-info">
                            <p class="product-name">${product.title}</p>
                            <p class="product-price">${product.price}</p>
                        </div>
                    </footer>
                </article>`
    }).join("")
}

priceInput.addEventListener("change", () => {
    currentPrice.textContent = priceInput.value
    filteredProducts = products.filter(product => {
        return product.price < priceInput.value
    })
    displayProducts()
})

// run the function
displayProducts()
currentPrice.textContent = priceInput.value

