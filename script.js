// Welcome Popup Close

function closeWelcome() {

    document.getElementById("welcomePopup").style.display = "none";

}
// ==========================
// Order Button (Menu Page)
// ==========================

const orderButton = document.getElementById("orderBtn");

if (orderButton) {

    orderButton.addEventListener("click", function() {

        if (orderButton.disabled === false) {

            alert("🎉 Thank you for choosing Mimo's Bite!");

            orderButton.innerText = "Ordered ✓";

            orderButton.style.backgroundColor = "green";
            orderButton.style.color = "white";

            orderButton.disabled = true;

            orderButton.style.cursor = "not-allowed";

        } else {

            alert("You have already placed your order!");

        }

    });

}



// ==========================
// Buy Buttons
// ==========================

const buyButtons = document.querySelectorAll(".buyBtn");


buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("🛒 Product added successfully!");

    });

});




// ==========================
// Cart System
// ==========================


let cartCount = 0;

let totalPrice = 0;

let items = [];



const cart = document.getElementById("cart-count");

const cartItem = document.getElementById("cart-item");

const cartList = document.getElementById("cart-list");

const total = document.getElementById("total-price");




function addToCart(productName, price) {


    cartCount++;

    totalPrice += price;


    cartCountElement();


    items.push(productName + " - ₹" + price);



    if (cartList) {

        cartList.innerHTML = "";


        items.forEach(function(item) {

            cartList.innerHTML += "<p>• " + item + "</p>";

        });

    }



    if (total) {

        total.innerText = "Total: ₹" + totalPrice;

    }



    alert("✅ " + productName + " added to cart!");

}





function cartCountElement() {

    if (cart) {

        cart.innerText = cartCount;

    }


    if (cartItem) {

        cartItem.innerText = "Items:";

    }

}





// ==========================
// Checkout Button
// ==========================


const checkoutBtn = document.getElementById("checkoutBtn");


if (checkoutBtn) {

    checkoutBtn.addEventListener("click", function() {


        if (cartCount === 0) {


            alert("🛒 Your cart is empty!");


        } else {


            window.location.href = "checkout.html";


        }


    });

}





// ==========================
// Clear Cart
// ==========================


const clearCartBtn = document.getElementById("clearCartBtn");


if (clearCartBtn) {


    clearCartBtn.addEventListener("click", function() {


        cartCount = 0;

        totalPrice = 0;

        items = [];



        if (cart) {

            cart.innerText = 0;

        }



        if (cartItem) {

            cartItem.innerText = "No items yet";

        }



        if (cartList) {

            cartList.innerHTML = "";

        }



        if (total) {

            total.innerText = "Total: ₹0";

        }



        alert("🗑 Cart Cleared!");


    });


}





// ==========================
// Checkout Form
// ==========================


const checkoutForm = document.getElementById("checkoutForm");


if (checkoutForm) {


    checkoutForm.addEventListener("submit", function(event) {


        event.preventDefault();



        let name = document.getElementById("name").value;

        let phone = document.getElementById("phone").value;

        let email = document.getElementById("email").value;

        let address = document.getElementById("address").value;



        if (name === "" || phone === "" || email === "" || address === "") {


            alert("⚠️ Please fill all the details!");


        } else {


            alert(

                "Thank you " + name + " 🎂\n\nYour order has been placed successfully!\nWe will contact you soon."

            );



            checkoutForm.reset();


        }


    });


}
// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "📩 Thank you for contacting Mimo's Bite!\n\nWe have received your message and will get back to you soon."
        );

        contactForm.reset();

    });

}
// ==========================
// Newsletter
// ==========================

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("🎉 Thank you for subscribing to Mimo's Bite!");

        newsletterForm.reset();

    });

}
// ==========================
// Search Menu Items
// ==========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        let value = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".menu-card");

        cards.forEach(function(card) {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
// ==========================
// Back To Top Button
// ==========================

let topBtn = document.getElementById("topBtn");

window.onscroll = function() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// ==========================
// Wishlist
// ==========================

function toggleWishlist(item) {

    if (item.innerHTML == "🤍") {

        item.innerHTML = "❤️";

        alert("Added to Wishlist ❤️");

    } else {

        item.innerHTML = "🤍";

        alert("Removed from Wishlist");

    }

} // ==========================
// Loader
// ==========================

window.addEventListener("load", function() {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});