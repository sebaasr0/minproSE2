# Brew & Bean Coffee Shop

**Live Demo:** https://minpro-se-2.vercel.app/

## Group Members: 
- Sebastian Rodriguez
- Makayla Hardware

***
## Project Files  
 
#### index.html 
Main HTML file containing the structure of the coffee shop website: 
- Navigation bar with cart functionality
- Hero section with coffee shop branding
- Coffee menu showcase section
- Newsletter subscription form
- Shopping cart modal overlay
- Footer with links and social media

### style.css 
Stylesheet containing all visual styling: 
- Responsive layout using Flexbox and CSS Grid
- Color scheme and typography variables
- Button and card styling
- Modal and overlay animations
- Mobile-responsive design with media queries

### script.js 
JavaScript file with interactive functionality: 
- **toggleCart()** - Opens and closes the shopping cart modal
- **addToCart(productName, price)** - Adds coffee products to the cart
- **removeFromCart(index)** - Removes items from the cart
- **updateCartDisplay()** - Refreshes the cart contents and total price
- **updateCartCount()** - Updates the cart badge number in navigation
- Event listeners for all buttons and interactive elements

***
## Interactive Elements & DOM Manipulation

### 1. Cart Button (Navigation) 
**What it does:** Opens the shopping cart modal when clicked 

**DOM functions used:** 
- `document.getElementById('cart-button')` - Selects the cart button
- `addEventListener('click', toggleCart)` - Listens for clicks
- `classList.add('show')` - Displays the cart modal

**What happens:** When you click the cart icon in the navigation, the cart modal slides in from the side showing all items you've added.

### 2. Add to Cart Buttons 
**What it does:** Adds the selected coffee product to your shopping cart 

**DOM functions used:** 
- `document.querySelectorAll('.add-to-cart')` - Selects all add to cart buttons
- `addEventListener('click', addToCart)` - Listens for clicks on each button
- `createElement('div')` - Creates a new cart item element
- `appendChild()` - Adds the new item to the cart display
- `textContent` - Sets the product name and price text
- 
**What happens:** When you click "Add to Cart" on a coffee product, it creates a new item in the cart, increments the cart counter badge, and updates the total price.

### 3. Remove from Cart Buttons 
**What it does:** Removes an item from your shopping cart 
**DOM functions used:** 
- `getElementById('cart-items')` - Selects the cart items container
- `addEventListener('click', removeFromCart)` - Listens for remove button clicks
- `removeChild()` - Removes the cart item element
- `splice()` - Removes item from the cart array

**What happens:** When you click the remove button next to a cart item, it deletes that item from the cart, updates the total, and decreases the cart counter.

### 4. Cart Modal Close Button (×) 
**What it does:** Closes the shopping cart modal 

**DOM functions used:** 
- `getElementById('close-cart')` - Selects the close button
- `addEventListener('click', toggleCart)` - Listens for clicks
- `classList.remove('show')` - Hides the cart modal 

**What happens:** When you click the X button or click outside the cart, the modal closes and returns you to the main page.

### 5. Newsletter Subscribe Button 
**What it does:** Submits email address for newsletter signup 

**DOM functions used:** 
- `querySelector('#email-input')` - Selects the email input field
-`getElementById('subscribe-btn')` - Selects the subscribe button 
- `addEventListener('click', handleSubscribe)` - Listens for button click
- `.value` - Gets the email input value 

**What happens:** When you enter an email and click Subscribe, it captures the email address and can display a confirmation message.

### 6. Navigation Links 
**What it does:** Smooth scrolling to different sections of the page 

**DOM functions used:** 
- `querySelectorAll('nav a')` - Selects all navigation links
- `addEventListener('click', scrollToSection)` - Listens for link clicks
- `scrollIntoView()` - Smoothly scrolls to target section

**What happens:** When you click on navigation links like "Shop" or "About Us", the page smoothly scrolls to that section.

## DOM Manipulation Functions Used 
This project uses the following JavaScript DOM methods: 

- **document.getElementById()** - Selecting elements by ID (cart, buttons, modals)
- **document.querySelector()** - Selecting first matching element (email input)
- **document.querySelectorAll()** - Selecting multiple elements (all add to cart buttons)
- **element.addEventListener()** - Adding click events to interactive elements
- **document.createElement()** - Creating new cart item elements dynamically
- **element.appendChild()** - Adding new elements to the DOM
- **element.removeChild()** - Removing cart items from the DOM
- **element.classList.add()** - Showing the cart modal
- **element.classList.remove()** - Hiding the cart modal
- **element.classList.toggle()** - Toggling cart visibility
- **element.textContent** - Updating text in cart items and totals
- **element.innerHTML** - Updating HTML content dynamically
- **element.value** - Getting form input values

***

## Technologies Used 
- HTML5
- JavaScript
- Vercel (Hosting)

***

## Features 
- Responsive design for mobile and desktop
- Interactive shopping cart with live updates
- Dynamic product catalog
- Newsletter subscription form
- Smooth animations and transitions



