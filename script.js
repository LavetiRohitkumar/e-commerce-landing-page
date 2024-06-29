document.addEventListener('DOMContentLoaded', function() {
    // Function to store product data in localStorage
    window.viewProduct = function(productId) {
        const products = {
            1: {
                title: "Designers Chair GT Designed by Carry Gall - The Collection",
                image: "https://www.luxinu.com/public/theme/images/b1.jpg",
                price: "$120",
                description: "A beautiful designer chair by Carry Gall."
            },
            2: {
                title: "Modern Chair SC-MD03",
                image: "https://cdn11.bigcommerce.com/s-ftyp0waks/products/152/images/419/SC-MD03__10935.1577710567.1280.1280.jpg?c=2",
                price: "$120",
                description: "A modern chair designed for comfort."
            },
            3: {
                title: "Another Designers Chair GT",
                image: "https://www.luxinu.com/public/theme/images/b1.jpg",
                price: "$120",
                description: "Another beautiful designer chair by Carry Gall."
            },
            4: {
                title: "Yet Another Designers Chair GT",
                image: "https://www.luxinu.com/public/theme/images/b1.jpg",
                price: "$120",
                description: "Yet another beautiful designer chair by Carry Gall."
            },
            5: {
                title: "Modern Chair SC-MD03",
                image: "https://cdn11.bigcommerce.com/s-ftyp0waks/products/152/images/419/SC-MD03__10935.1577710567.1280.1280.jpg?c=2",
                price: "$120",
                description: "A modern chair designed for comfort."
            },
            6: {
                title: "Designers Chair GT Designed by Carry Gall - The Collection",
                image: "https://www.luxinu.com/public/theme/images/b1.jpg",
                price: "$120",
                description: "A beautiful designer chair by Carry Gall."
            }
        };
        
        const product = products[productId];
        localStorage.setItem('product', JSON.stringify(product));
        window.location.href = 'product-details.html';
    };

    // Load product details if on product details page
    if (window.location.pathname.endsWith('product-details.html')) {
        const productData = localStorage.getItem('product');
        if (productData) {
            const product = JSON.parse(productData);
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
            const addToCartButton = document.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', function() {
                console.log('Add to Cart Product:', product);
                // Implement your add to cart logic here
                alert('Product added to cart.');
            });
        } else {
            document.getElementById('product-title').textContent = 'Product not found';
            document.getElementById('product-image').style.display = 'none';
            document.getElementById('product-price').style.display = 'none';
            document.getElementById('product-description').textContent = '';
        }
    }
});
