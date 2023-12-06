// Fetch all products from the server
function getComment() {
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallcomment')
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
      <td>${product.username}</td>
      <td>${product.comment}</td>
    
      <td>${product.questions}</td>
      <td>${product.tanggal}</td>
      <td>${product.status ? 'True' : 'False'}</td>
      <td><a href="updatedcomment.html?id=${product.id}&username=${product.username}&comment=${product.comment}&questions=${product.questions}&tanggal=${product.tanggal}">Edit</a></td>
      <td><a href="deletecomment.html?id=${product.id}">Delete</a></td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch and display products on page load
window.onload = getComment;
