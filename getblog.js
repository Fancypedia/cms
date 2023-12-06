// Fetch all products from the server
function getBlog() {
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallblog')
    .then(response => response.json())
    .then(data => {
      if (data.status === true) {
        displayProducts(data.data);
      } else {
        console.error('Failed to fetch products');
      }
    })
    .catch(error => console.error('Error:', error));
}

// Display products in the table
function displayProducts(products) {
  const tableBody = document.getElementById('productTableBody');
  tableBody.innerHTML = '';

  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.content_one}</td>
      <td>${product.content_two}</td>
      <td><img src="${product.image}" alt="Product Image" style="width: 50px; height: 50px;"></td>
      <td>${product.description}</td>
      <td>${product.status ? 'True' : 'False'}</td>
      <td><a href="updatedblog.html?id=${product.id}&content_one=${product.content_one}&content_two=${product.content_two}&image=${product.image}&description=${product.description}&status=${product.status}">Edit</a></td>
      <td><a href="deleteblog.html?id=${product.id}">Delete</a></td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch and display products on page load
window.onload = getBlog;
