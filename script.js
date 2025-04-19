// const inputText = document.querySelector('.js-input');
// const passwordText = document.querySelector('.js-password');
// const buttonElement = document.querySelector('.js-button');

// function login() {
//   buttonElement.addEventListener('click', () => {
//     const email = inputText.value.trim();
//     const password = passwordText.value.trim();

//     callingLoginAPI(email, password, () => {
//       alert("Success");
//     });
//   });
// }

// async function callingLoginAPI(email, password, onSuccess) {
//   try {
//     const response = await fetch('https://api.connct.ai/v1/api/auth/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });

//     console.log('Response status:', response.status);
//     console.log('Response headers:', response.headers);

//     if (!response.ok) {
//       alert('Login failed. Please check your credentials or try again later.');
//       return;
//     }

//     const data = await response.json();
//     console.log('Response JSON:', data);

//     if (data.token) {
//       localStorage.setItem('authToken', data.token);
//       console.log('Token saved:', data.token);
//       onSuccess?.();
//     } else {
//       alert('Login failed. Token not found.');
//       console.error('No token found in response:', data);
//     }
//   } catch (error) {
//     alert('Login failed due to network error.');
//     console.error('Network error:', error);
//   }
// }

// login();


async function fetchProducts() {
  try {
    const response = await fetch('https://api.connct.ai/v1/api/public-api/list-products');
    const result = await response.json();

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    // S3 Bucket URL for the images
    const s3BaseURL = 'https://connct-prod-images.s3.ap-south-1.amazonaws.com/';

    result.cards.forEach(product => {
      // Check if the product has an image
      if (!product.image) {
        // If there's no image, skip this product (don't display the card)
        return;
      }

      // Construct the full S3 image URL dynamically
      const fullImageURL = `${s3BaseURL}${product.image}`;

      // Create the card element
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

      card.innerHTML = `
        <div class="card h-100">
          <img src="${fullImageURL}" class="card-img-top" alt="${product.name}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <a href="#" class="btn btn-primary mt-auto">Buy Now</a>
          </div>
        </div>
      `;

      productList.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to fetch products:', err);
  }
}

fetchProducts();

