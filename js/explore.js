document.addEventListener("DOMContentLoaded",function(){
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    var addedProducts=[];
    function mycart() {
        document.getElementById("mcrt").classList.toggle("show");
    }
    var count = 0;
    var c = document.getElementById("cartcount");
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        if (!event.target.matches('.dropbtn1')) {
            var dropdowns = document.getElementsByClassName("dropdown-content1");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    function myFunctionk() {
        document.getElementById("myDropdown1").classList.toggle("show");
    }
    function addc(classname) {
        console.log(classname);
        let s=classname.match(/(\d+)/);
        let k="prod"+s[0];
        var product=document.getElementById(k);

        var a = document.getElementById(classname);
        if (a.innerText != "Added") {
            a.innerText = "Added";
            count += 1;

        } else {
            a.innerText = "Add to cart";
            count -= 1;
        }
        var productName = product.querySelector('h5').innerText;
        var productPrice = product.querySelector('.price').innerText;
    
        // Check if the product is already added
        var existingProduct = addedProducts.find(item => item.name === productName);
    
        if (!existingProduct) {
            // If the product is not in the cart, add it to the array
            addedProducts.push({ name: productName, price: productPrice });
        } else {
            // If the product already exists in the cart, you can update quantity or take other actions
            // For this example, let's remove the product if it's clicked again
            addedProducts = addedProducts.filter(item => item.name !== productName);
        }
    
        // Call a function to update the cart content
        updateCartDisplay();
        c.innerText = count.toString();
        console.log(count);
    }
    function updateCartDisplay() {
        var cartItemsContainer = document.querySelector('.cart-items-container');
        cartItemsContainer.innerHTML = '';
    
        // Create a set to store unique product names
        var uniqueProducts = new Set();
        
        addedProducts.forEach(item => {
            // Check if the product is already displayed
            if (!uniqueProducts.has(item.name)) {
                uniqueProducts.add(item.name);
                var j=item.price.match(/(\d+)/);
                var k=j[0].toString()+j[1].toString();
                var productDiv = document.createElement('div');
                productDiv.classList.add('cart-item');
                var quantity = addedProducts.filter(prod => prod.name === item.name).length;
                var totalPrice = parseFloat(k) * quantity;
    
                productDiv.innerHTML = `
                    <div class="cart-item-details">
                        <p>${item.name}</p>
                        <p>Price per item: ${item.price}</p>
                        <div class="quantity">
                            <button id="dec" class="quantity-btn decrease">-</button>
                            <span>${quantity}</span>
                            <button id="dec" class="quantity-btn increase">+</button>
                        </div>
                        <p>Total Price: Rs. ${totalPrice.toFixed(2)}</p>
                    </div>
                `;
    
                var decreaseBtn = productDiv.querySelector('.decrease');
                var increaseBtn = productDiv.querySelector('.increase');
    
                decreaseBtn.addEventListener('click', () => {
                    // Decrease the quantity
                    var index = addedProducts.findIndex(prod => prod.name === item.name);
                    if (index !== -1) {
                        addedProducts.splice(index, 1);
                        updateCartDisplay();
                    }
                });
    
                increaseBtn.addEventListener('click', () => {
                    // Increase the quantity
                    addedProducts.push(item);
                    updateCartDisplay();
                });
    
                cartItemsContainer.appendChild(productDiv);
            }
        });
    }
    
    
})