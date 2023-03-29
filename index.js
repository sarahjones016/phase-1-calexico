//Variables
const menu = document.getElementById("menu-items")
const dishImage = document.getElementById("dish-image")
const dishName = document.getElementById("dish-name")
const dishDescription = document.getElementById("dish-description")
const dishPrice = document.getElementById("dish-price")
const cartForm = document.getElementById("cart-form")
let numberInCart = document.getElementById("number-in-cart")

//Fetch menu items and append them to the dom
fetch("http://localhost:3000/menu")
.then(function(res) {
    return res.json();
})
.then(function (data) {
    //console.log(data)
    renderMenuItems(data);
})

function renderMenuItems(data) {
    for (const item of data) {
        //console.log(item)

        const nameOfItem = document.createElement("span")
        nameOfItem.textContent = item.name
        console.log(nameOfItem)
        menu.append(nameOfItem)

        //Should be the first image, not the last image
        dishImage.src = item.image
        dishName.textContent = item.name
        dishDescription.textContent = item.description
        dishPrice.textContent = "$" + `${item.price}`

        nameOfItem.addEventListener("click", function() {
            console.log("menu item has been clicked")

            dishImage.src = item.image
            dishName.textContent = item.name
            dishDescription.textContent = item.description
            dishPrice.textContent = "$" + `${item.price}`

        })
    }
}

//Add to Cart
cartForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("I clicked the cart button")

    console.log(e.target["cart-amount"].value)
    numberInCart.textContent = parseInt(numberInCart.textContent, 10) + parseInt(e.target["cart-amount"].value, 10)
})

