var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
// function is created to to open and close menu 
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    }
    // if not equal then don't show the menubar
    else {
        MenuItems.style.maxHeight = "0px"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("mailListForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.getElementById("offer-email").value;
        let name = document.getElementById("offer-name").value;    
        alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);
        form.reset();
    });
}); 


document.addEventListener("DOMContentLoaded",function (){
    let form1 = document.getElementById('form1').addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
    
        // Show an alert with the email input value
        alert(`Thank you! Your email has been submitted , You Will Be Contacted Soon.`);
        form1.reset();
    });
});

document.addEventListener("DOMContentLoaded",function (){
   let contactmessg = document.getElementById('contact-form-messg').addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Show an alert with the email input value
        alert('Thank you! Your Message has been submitted, You Will Be Contacted Soon.');
        contactmessg.reset();
    });
});

document.addEventListener("DOMContentLoaded",function (){
    let loginform = document.getElementById('login-form').addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Show an alert with the email input value
        alert('Thank you! Your are Now Logged In.');
        loginform.reset();
    });
});

document.addEventListener("DOMContentLoaded",function (){
    let registerform = document.getElementById('register-form').addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Show an alert with the email input value
        alert('Thank you! You Are Now Register To Red Store');
        // Optional: Reset the form after submission
        registerform.reset();
    });
});

let LoginForm = document.getElementById("login-form");
let RegForm = document.getElementById("register-form");
let Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

const darkModeToggle = document.querySelector('#checkbox');
const body = document.body;
const logo = document.getElementById("logo");
const logo_1 = document.getElementById("logo-1");

// Check if the 'dark-mode' key exists in localStorage
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    logo.src = "images/logo-white.png";
    logo_1.src = "images/logo-white.png";
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
        logo.src = "images/logo-white.png";
        logo_1.src = "images/logo-white.png";
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
        logo.src = "images/logo.png";
        logo_1.src = "images/logo.png";
    }
});

// If the 'dark-mode' key is set to 'false' in localStorage, remove the 'dark-mode' class from the body element and uncheck the dark mode toggle
if (localStorage.getItem('dark-mode') === 'false') {
    body.classList.remove('dark-mode');
    darkModeToggle.checked = false;
    logo.src = "images/logo.png";
    logo_1.src = "images/logo.png";
}

// Add a click event listener to the document to toggle the dark mode when the label for the checkbox is clicked
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LABEL' && event.target.for === 'dark-mode-toggle') {
        event.preventDefault();
        darkModeToggle.click();
    }
});

// Add a click event listener to the uncheck-dark-mode buttons to uncheck the dark mode toggle and remove the 'dark-mode' class from the body element
const uncheckDarkModeButtons = document.querySelectorAll('.uncheck-dark-mode');
uncheckDarkModeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        darkModeToggle.checked = false;
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
    });
});

//   ========= cart working ==========
// Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
// cart-icon value is stored in this variable cartIcon
let cart = document.querySelector(".cart");
// .cart value is stored in this variable cart
let closeCart = document.querySelector("#close-cart");
// #close-cart value is stored in this variable closeCart
// Open Cart
cartIcon.onclick = () => {
    // function for open cart firstly variable name then .onclick function means when anyone click on value it perform bottom function
    cart.classList.add("active");
    // cart called and then that classlist will added if it will be active 
};

// close Cart
closeCart.onclick = () => {
    // function for close cart firstly variable name then .onclick function means when anyone click on value it perform bottom function
    cart.classList.remove("active");
    // cart called and then that classlist will remove if it will be active 
};

// Cart Working JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}
// Making Function
function ready() {
    // Remove Item From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

    //load cart items
    loadCartItems();
}


// Remove Cart Item
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
    saveCartItems();

}

// Quantity Change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
    saveCartItems();
    updateCartIcon();
}

// Add Cart Function
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
    saveCartItems();
    updateCartIcon();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("You have already added this item to cart");
            return;
        }
    }

    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" name="" id="" value="1" class="cart-quantity">
    </div
    <!-- Remove Items -->
    <i class="bx bx-trash-alt cart-remove"></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0]
        .addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0]
        .addEventListener("change", quantityChanged);
    saveCartItems();
    updateCartIcon();
}

// Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    }
    //if price conatin some cents
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    //save total to local storage
    localStorage.setItem("cartTotal", total);
}

// Keep Item in cart when page refresh with Localstorage
function saveCartItems() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var cartItems = [];
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
// loads in cart
function loadCartItems() {
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);

        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);

            var cartBoxes = document.getElementsByClassName("cart-box");
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem("cartTotal");
    if (cartTotal) {
        document.getElementsByClassName("total-price")[0].innerText = "$" + cartTotal;
    }
    updateCartIcon();
}


// quantity in Cart Icon
function updateCartIcon() {
    var cartBoxes = document.getElementsByClassName("cart-box");
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity", quantity);
}

// const form = document.getElementById('mailListForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Get the input values
//     const name = document.getElementById('offer-name').value;
//     const email = document.getElementById('offer-email').value;

//     // You can perform validation here if needed

//     // Show an alert message
//     alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);

//     // Optional: Reset the form after submission
//     form.reset();
// });
    

    // services swiper code
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});


// let form = document.getElementById("mailListForm");
// form.onsubmit = (e) => {
//     e.preventDefault();
//     let email = document.getElementById("offer-email").value;
//     let name = document.getElementById("offer-name").value;    
//         alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);
// }




document.getElementById('form1').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show an alert with the email input value
    alert('Thank you! Your email has been submitted.');
});