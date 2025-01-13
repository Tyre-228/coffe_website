const createOrderMenu = (image, title, description, coffePrice) => {
    // get all dom elements needed
    const popup = document.getElementById("popup");
    const popupImage = popup.querySelector(".popup-image img")
    const popupTitle = popup.querySelector("h2")
    const popupText = popup.querySelector("p")
    const popupPrice = popup.querySelector(".price")
    const popupQuantity = popup.querySelector("#quantity")
    const popupModifiers = popup.querySelector(".modifiers")
    const popupOrder = popup.querySelector(".order")

    // set up popup menu
    popupImage.setAttribute("src", image.getAttribute("src"))
    popupTitle.innerHTML = title.innerText
    popupText.innerHTML = description.innerText
    popup.style.display = "flex"

    // event listener that recalculates total price if user changes the topings, milks or quantity
    popupModifiers.addEventListener("click", (event) => {
        let milkPrice = 0
        let toppingPrice = 0

        // gather data for price calculation
        if(event.target.closest("select")) {
            const currentSelect = event.target.closest("select")
            
            if(currentSelect.getAttribute("id") !== "quantity" && currentSelect.getAttribute("id") !== "milk-type1") {
                if(currentSelect.getAttribute("id") === "milk-type2") {
                    milkPrice = parseInt(currentSelect.value)
                }
                else {
                    toppings = [...popup.querySelectorAll("#topping")]
                    toppingPrice = 0
                    toppings.forEach(e => {
                        toppingPrice += parseFloat(e.value)
                    })
                }
            }
        }
        // calculate the price
        quantity = parseInt(popupQuantity.value)
        price = coffePrice + milkPrice + toppingPrice
        popupPrice.innerText = `Price: £${price * quantity}`
    })
    // change menu if user clicked order button
    popupOrder.addEventListener("click", (event) => {
        document.body.style.overflow = 'hidden';
        popup.innerHTML = 
        `<div class="popup-content">
            <div class="post-order-message">
                <h1>Thank you for order<h1>
            </div>
         </div>`
    })
}


const main = () => {
    const coffeMenuElement = document.querySelector(".menu")

    coffeMenuElement.addEventListener("click", (event) => {
        if(event.target.className == "order") {
            const currentMenuItem = event.target.closest(".menu-item")
            const currentImage = currentMenuItem.querySelector("img")
            const currentTitle = currentMenuItem.querySelector("h3")
            const currentDescription = currentMenuItem.querySelector("p")
            const price = parseInt(currentMenuItem.getAttribute("price"))

            createOrderMenu(currentImage, currentTitle, currentDescription, price)
        }
    })
}




window.onload = main