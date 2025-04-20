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

//ProductList

// async function fetchProducts() {
//   try {
//     const response = await fetch('https://api.connct.ai/v1/api/public-api/list-products');
//     const { cards } = await response.json();
//     const s3BaseURL = 'https://connct-prod-images.s3.ap-south-1.amazonaws.com/';

//     const productList = document.getElementById('product-list');
//     productList.innerHTML = '';

//     cards.forEach(({ image, name, price }) => {
//       if (!image) return; // Skip if no image

//       const cardHTML = `
//         <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//           <div class="card h-100">
//             <img src="${s3BaseURL}${image}" class="card-img-top" alt="${name}" />
//             <div class="card-body d-flex flex-column">
//               <h5 class="card-title">${name}</h5>
//               <p class="card-text">₹${price}</p>
//               <a href="#" class="btn btn-primary mt-auto">Buy Now</a>
//             </div>
//           </div>
//         </div>
//       `;

//       productList.insertAdjacentHTML('beforeend', cardHTML);
//     });
//   } catch (err) {
//     console.error('Failed to fetch products:', err);
//   }
// }

// fetchProducts();

//Blogs

// async function fetchBlogs() {
//   try {
//     const res = await fetch('https://api.connct.ai/v1/api/public-api/category-with-blogs');
//     const { getLatestBlogs = [], categoryWithBlogs = [] } = await res.json();

//     const blogList = document.getElementById('blog-list');
//     blogList.innerHTML = '';
//     const s3BaseURL = 'https://connct-prod-images.s3.ap-south-1.amazonaws.com/';

//     const renderBlog = (blog, category = '', subcategory = '') => {
//       const date = new Date(blog.createdAt).toLocaleDateString();
//       const img = blog.image ? `<img src="${s3BaseURL}${blog.image}" class="img-fluid mb-3 rounded" alt="${blog.title}">` : '';
//       return `
//         <div class="mb-4 p-3 border rounded shadow-sm">
//           ${img}
//           <h4>${blog.title}</h4>
//           <p class="text-muted mb-1">📅 ${date}</p>
//           <p>${blog.metaDesc || ''}</p>
//           <p class="text-secondary mb-0">
//             <strong>Category:</strong> ${category || blog.Category?.name || 'N/A'} |
//             <strong>Subcategory:</strong> ${subcategory || blog.Subcategory?.name || 'N/A'}
//           </p>
//         </div>
//       `;
//     };

//     console.log('Latest Blogs:', getLatestBlogs);
//     getLatestBlogs.forEach(blog => blogList.insertAdjacentHTML('beforeend', renderBlog(blog)));

//     categoryWithBlogs.forEach(({ name, Blogs = [] }) => {
//       console.log(`Category: ${name} - Number of blogs: ${Blogs.length}`);
//       if (!Blogs.length) return console.log(`No blogs found for category: ${name}`);
//       Blogs.forEach(blog =>
//         blogList.insertAdjacentHTML('beforeend', renderBlog(blog, name, blog.Subcategory?.name))
//       );
//     });

//   } catch (err) {
//     console.error('Failed to fetch blogs:', err);
//   }
// }


// fetchBlogs();


