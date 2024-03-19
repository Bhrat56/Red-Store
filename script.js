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
            alert("You have already added this item to cart , You Can Change Quantity From Cart");
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

 
let viewheading1 = `Our Products`;
let v1span = ` Quality!`;
let viewheading2 = `Premium `;
let v2span = `Product!`;
let viewheading3 = `Our `;
let v3span = ` Infrastructure!`;

let viewparg1 = `Product quality is a critical aspect that defines the value and satisfaction customers derive from a product. It encompasses various factors, including durability, performance, reliability, design, and overall customer experience. A high level of product quality not only meets but often exceeds customer expectations, leading to increased trust, loyalty, and positive brand reputation.
<br><br>
 Durability is a key component of product quality, indicating the ability of a product to withstand wear, tear, and usage over time. High-quality products are built with durable materials and robust construction techniques, ensuring longevity and reducing the need for frequent replacements or repairs. Customers value products that maintain their functionality and appearance even after extended use, reflecting positively on the brand's commitment to quality.
 <br><br>
 Performance is another crucial aspect of product quality, especially in functional items such as electronics, appliances, and machinery. A quality product delivers consistent and reliable performance, meeting or surpassing the intended functionality and specifications. Whether it's a smartphone with fast processing speed, a vacuum cleaner with powerful suction, or a car with efficient fuel consumption, customers expect products to perform optimally and enhance their daily lives.
 <br><br>
 Reliability goes hand in hand with performance, referring to the consistency and dependability of a product under various conditions. High-quality products exhibit reliability by functioning as expected without unexpected failures or malfunctions. This reliability instills confidence in customers, assuring them that the product will perform predictably and meet their needs without disruptions.
 <br><br>
 Design plays a significant role in product quality, encompassing both aesthetics and functionality. Well-designed products not only look visually appealing but also prioritize user experience, ergonomics, and ease of use. A thoughtful design enhances the overall quality perception of a product, making it more desirable and enjoyable for customers to use.
 <br><br>`;
let viewparg2 = `Introducing Our Premium Product: Elevating Excellence to New Heights
 <br><br>
 Our premium product is a culmination of meticulous craftsmanship, cutting-edge technology, and unparalleled attention to detail. Designed for discerning individuals who demand nothing but the best, this product sets new standards in quality, performance, and luxury.
 <br><br>
 At the core of this premium product is a commitment to excellence. Each component is carefully selected, ensuring the highest level of durability, functionality, and aesthetics. From the finest materials sourced from around the globe to the precision engineering that goes into its creation, every aspect reflects our unwavering dedication to perfection.
 <br><br>
 The design of our premium product is a testament to timeless elegance and sophistication. Every curve, every line is meticulously crafted to achieve a harmonious balance between form and function. Whether it's the sleek silhouette, the refined detailing, or the luxurious finish, this product exudes an aura of exclusivity and prestige.
 <br><br>
 But it's not just about aesthetics; our premium product delivers exceptional performance that exceeds expectations. Whether you're looking for unparalleled comfort, unmatched durability, or advanced functionality, this product is designed to meet and exceed your every need. It's not just a purchase; it's an investment in quality and excellence that will stand the test of time.
 <br><br>
 Furthermore, our commitment to sustainability is reflected in the production of this premium product. We strive to minimize our environmental footprint by employing eco-friendly practices and materials without compromising on quality or performance. This ensures that not only are you getting a superior product, but you're also contributing to a greener, more sustainable future.
 `;
let viewparg3 = `Our Infrastructure: A Foundation for Excellence
 <br><br>
 At Red Store, we take immense pride in our robust and state-of-the-art infrastructure, which serves as the backbone of our operations and reflects our commitment to excellence in every aspect of our business.
 <br><br>
 Our manufacturing facilities are equipped with cutting-edge technology and modern machinery, allowing us to maintain the highest standards of quality and efficiency in production. From precision engineering to meticulous quality control processes, every step of our manufacturing process is designed to deliver superior products that meet and exceed customer expectations.
 <br><br>
 In addition to our manufacturing capabilities, our logistics and distribution network is strategically optimized to ensure timely delivery of products to our customers across the globe. We have established partnerships with reliable shipping and transportation providers, allowing us to streamline the supply chain and minimize lead times.
 <br><br>
 Moreover, our research and development (R&D) facilities play a crucial role in driving innovation and product development. Our team of experienced engineers, designers, and scientists work tirelessly to explore new technologies, materials, and methodologies that enhance the performance, functionality, and sustainability of our products.
 <br><br>
 Furthermore, our infrastructure includes modern warehousing and storage facilities that adhere to industry-best practices for inventory management and product handling. This ensures that our products are stored in optimal conditions and are ready for shipment whenever needed.
 <br><br>
 At the heart of our infrastructure is a dedicated team of professionals who are committed to maintaining the highest standards of safety, efficiency, and sustainability. We prioritize environmental responsibility by implementing eco-friendly practices and technologies throughout our operations.
 `;


function viewmore1() {
    document.getElementById('viewmore').style.display = "block";
    document.getElementById('about-main').style.display = "none";
    document.querySelector(".view-heading").innerHTML = viewheading1;
    document.getElementById("view-span").innerHTML = v1span;
    document.querySelector(".view-parg").innerHTML = viewparg1;
}

function aboutlink() {
    document.getElementById('about-main').style.display = "block";
    document.getElementById('viewmore').style.display = "none";
}

function viewmore2() {
    document.getElementById('about-main').style.display = "none";
    document.getElementById('viewmore').style.display = "block";
    document.querySelector(".view-heading").innerHTML = viewheading2;
    document.getElementById("view-span").innerHTML = v2span;
    document.querySelector(".view-parg").innerHTML = viewparg2;
}

function viewmore3() {
    document.getElementById('about-main').style.display = "none";
    document.getElementById('viewmore').style.display = "block";
    document.querySelector(".view-heading").innerHTML = viewheading3;
    document.getElementById("view-span").innerHTML = v3span;
    document.querySelector(".view-parg").innerHTML = viewparg3;
}

// ============ service page functions =======================

let readheading1 = `Customer Support`;
let readheading2 = `24 / 7 Support`;
let readheading3 = `Replacement`;
let readheading4 = `Refund Support`;
let readheading5 = `Money Back Guarantee`;
let readheading6 = `Warranty`;



function readmore1() {
    document.getElementById('services-main').style.display = "none";
    document.getElementById('readmore').style.display = "block";
    document.querySelector(".read-heading").innerHTML = readheading1;
    document.querySelector(".read-parg").innerHTML = `Customer support plays a pivotal role in ensuring customer satisfaction and fostering long-term relationships between businesses and their clientele. At our company, we prioritize and value customer support as a cornerstone of our operations, understanding its critical importance in today's competitive market.
<br><br>
    Our customer support team is comprised of dedicated professionals who are committed to providing unparalleled assistance and resolving queries promptly and efficiently. Whether it's addressing product-related issues, guiding customers through our services, or offering technical support, our team is always ready to go the extra mile to meet and exceed customer expectations.
    <br><br>
    One of the key aspects of our customer support is its accessibility. We offer multiple channels for customers to reach us, including phone support, email correspondence, live chat on our website, and social media platforms. This multi-channel approach ensures that customers can contact us in a way that is convenient for them, enhancing their overall experience with our company.
    <br><br>
    Moreover, our customer support representatives are extensively trained and equipped with in-depth knowledge about our products or services. This enables them to provide accurate information, offer personalized solutions, and guide customers through any challenges they may encounter. We believe in proactive communication and strive to address customer concerns proactively, demonstrating our commitment to excellent service.
    <br><br>
    Furthermore, we understand that each customer interaction is an opportunity to build trust and loyalty. Our customer support team is not only focused on resolving immediate issues but also on building meaningful relationships with our customers. We listen attentively to their feedback, incorporate suggestions for improvement, and continuously strive to enhance our services based on customer insights.`;
}

function servicelink()
{
    document.getElementById('services-main').style.display = "block";
    document.getElementById('readmore').style.display = "none";
}
function readmore2() {
    document.getElementById('services-main').style.display = "none";
    document.getElementById('readmore').style.display = "block";
    document.querySelector(".read-heading").innerHTML = readheading2;
    document.querySelector(".read-parg").innerHTML = `**Providing Unmatched Support: Our 24/7 Commitment**
<br><br>
    At our company, we understand the critical importance of providing round-the-clock support to our valued customers. Our 24/7 support service is not just a commitment; it's a testament to our dedication to ensuring your satisfaction and peace of mind at all times.
    <br><br>
    One of the key advantages of our 24/7 support is its accessibility. Regardless of the time zone or day of the week, our team of skilled and experienced support professionals is available to assist you. Whether you encounter technical issues, have questions about our products or services, or need guidance in using our solutions effectively, our support team is just a call, email, or chat away.
    <br><br>
    We take pride in our swift response times. When you reach out to us for support, you can expect a prompt and efficient resolution to your inquiries or concerns. Our support representatives are trained to listen actively, understand your needs thoroughly, and provide tailored solutions that address your specific requirements.
    <br><br>
    Moreover, our 24/7 support is not limited to reactive assistance. We also offer proactive support measures to anticipate and mitigate potential issues before they escalate. Through proactive monitoring, regular updates, and preventive maintenance, we strive to ensure a seamless and uninterrupted experience for our customers.
    <br><br>
    Furthermore, our support services are backed by a robust knowledge base and continuous training programs for our support team. This ensures that our representatives are equipped with the latest information, tools, and techniques to deliver accurate and effective support consistently.`;
}
function readmore3() {
    document.getElementById('services-main').style.display = "none";
    document.getElementById('readmore').style.display = "block";
    document.querySelector(".read-heading").innerHTML = readheading3;
    document.querySelector(".read-parg").innerHTML = `Replacement is a process or action of substituting one thing for another, especially as part of a warranty, guarantee, or insurance policy. It is a crucial aspect of consumer rights and product/service assurance, ensuring that customers receive satisfactory solutions when faced with defective or unsatisfactory items.
<br><br>
    In the realm of consumer products, replacement plays a significant role in maintaining customer satisfaction and loyalty. When a product is found to be faulty, damaged, or not meeting the expected standards, consumers have the right to request a replacement. This can include items such as electronics, appliances, clothing, and more.
    <br><br>
    One of the key benefits of replacement is that it provides customers with a quick and effective solution to their issues. Instead of going through lengthy repair processes or accepting subpar products, replacements offer a straightforward way to receive a functional and satisfactory item.
    <br><br>
    Moreover, replacements are often covered under warranties or guarantees provided by manufacturers or retailers. These policies assure customers that if their purchased item experiences issues within a specified period, they are entitled to a replacement at no additional cost. This instills confidence in consumers, encouraging them to make purchases knowing that they are protected against potential defects or malfunctions.
    <br><br>
    For businesses, offering replacement services is not just about adhering to legal obligations but also about building trust and maintaining a positive reputation. Companies that prioritize customer satisfaction by swiftly addressing replacement requests demonstrate their commitment to quality and customer-centric values. This, in turn, fosters long-term relationships with customers and enhances brand loyalty.`;
}
function readmore4() {
    document.getElementById('services-main').style.display = "none";
    document.getElementById('readmore').style.display = "block";
    document.querySelector(".read-heading").innerHTML = readheading4;
    document.querySelector(".read-parg").innerHTML = `A refund is a financial transaction that involves returning money to a customer who is dissatisfied with a product or service or has encountered a problem with their purchase. It is a crucial aspect of customer service and consumer rights, providing a mechanism for resolving disputes and ensuring customer satisfaction.
<br><br>
    When a customer requests a refund, it typically follows a specific process outlined by the seller or service provider. This process may involve verifying the reason for the refund request, such as product defects, delivery issues, or dissatisfaction with the quality or performance. Customers may be required to provide proof of purchase, such as receipts or order numbers, to facilitate the refund process.
    <br><br> 
    1. Credit Card Refunds: For purchases made using a credit card, the refund is often processed back to the same credit card used for the transaction. The refunded amount appears as a credit on the customer's next credit card statement.
    <br><br>
    2. PayPal or Online Payment Refunds: For online payments through platforms like PayPal, refunds are typically credited back to the customer's PayPal account. From there, the customer can choose to transfer the funds to their bank account or use them for future purchases.
    <br><br>
    3. Store Credit or Gift Card Refunds: In some cases, especially for returns without a receipt or for items purchased with store credit or gift cards, refunds may be issued in the form of store credit or a new gift card.
    <br><br>
    4. Cash Refunds: For in-person purchases or returns made at physical retail locations, cash refunds are a common method of returning money to customers.`;
}
function readmore5() {
    document.getElementById('services-main').style.display = "none";
    document.getElementById('readmore').style.display = "block";
    document.querySelector(".read-heading").innerHTML = readheading5;
    document.querySelector(".read-parg").innerHTML = `
    Our Money Back Guarantee: Your Peace of Mind
<br><br>
At [Red Store], we understand the importance of trust and confidence when making a purchase. That's why we offer a comprehensive Money Back Guarantee to our valued customers, ensuring your complete satisfaction and peace of mind.
<br><br>
Our Money Back Guarantee is designed to provide you with a risk-free shopping experience, allowing you to shop with confidence knowing that your investment is protected. Whether you're purchasing a product or subscribing to a service, our guarantee covers a wide range of scenarios to ensure that you're fully satisfied with your experience.
<br><br>
One of the key aspects of our Money Back Guarantee is its transparency and simplicity. We believe in clear and straightforward policies, so you know exactly what to expect in case you need to avail yourself of the guarantee. If for any reason you are not satisfied with your purchase or service, you can contact our customer support team within the specified timeframe to initiate the refund process.
<br><br>
Our dedicated customer support team is available to assist you every step of the way. They will guide you through the refund process, answer any questions or concerns you may have, and ensure a smooth and hassle-free experience. We are committed to providing excellent service even when things don't go as planned.`;
}
function readmore6() {
    document.getElementById('services-main').style.display = "none";
    document.getElementById('readmore').style.display = "block";
    document.querySelector(".read-heading").innerHTML = readheading6;
    document.querySelector(".read-parg").innerHTML = `A warranty is a vital aspect of any purchase, providing consumers with confidence and assurance regarding the quality and reliability of a product or service. At its core, a warranty is a promise made by the seller or manufacturer to stand behind their product and address any issues that may arise within a specified period after the purchase.
    <br><br>
    Warranties come in various forms, including manufacturer warranties, extended warranties, and service contracts, each offering different levels of coverage and duration. Manufacturer warranties typically cover defects in materials or workmanship and are often included with the purchase of a product at no extra cost. These warranties typically last for a specific period, such as one year or more, during which the manufacturer agrees to repair or replace the product if it fails due to covered issues.
    <br><br>
    Extended warranties, on the other hand, are optional plans that consumers can purchase to extend the coverage beyond the manufacturer's warranty period. These plans may provide additional benefits, such as coverage for accidental damage, and can offer peace of mind for those concerned about potential future issues.
    <br><br>
    Service contracts are another form of warranty that focuses on providing ongoing maintenance and support for a product or service. These contracts may include regular inspections, repairs, and technical assistance to ensure the continued functionality and performance of the covered item.
    <br><br>
    Warranties typically outline the terms and conditions of coverage, including what is and isn't covered, the duration of coverage, any limitations or exclusions, and the process for making a warranty claim. It's essential for consumers to review the warranty terms carefully to understand their rights and responsibilities regarding warranty coverage.
    <br><br>
    Having a warranty in place can significantly benefit consumers by protecting their investment, ensuring product reliability, and providing recourse in case of unexpected issues. It instills trust in the brand or manufacturer and demonstrates their commitment to customer satisfaction and product quality. As such, warranties play a crucial role in fostering positive relationships between businesses and consumers while promoting confidence in the marketplace.`;
}

     function readclose(){
    document.getElementById('services-main').style.display = "block";
     document.getElementById('readmore').style.display = "none";
};

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

document.getElementById('form1').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show an alert with the email input value
    alert('Thank you! Your email has been submitted.');
});
