window.onload = function() {
  getProducts()
}
function submitForm() {
  const form = document.getElementById('productForm');
  const payload = {
    "Id": parseInt(document.getElementById('Id').value), // Mengonversi ke tipe int
    "Content": document.getElementById('Content').value,
    "Image": document.getElementById('Image').value,
    "Description": document.getElementById('Description').value,// Mengonversi ke tipe float jika perlu
    "status": document.getElementById('status').checked
  };

  // ... (bagian fetch lainnya) ...
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.text(); // Mengembalikan respon dalam bentuk teks
    } else {
      throw new Error('Gagal membuat produk'); // Melempar error jika respon tidak berhasil
    }
  })
  .then(data => {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Respon dari server: ' + data;
    responseMessage.style.color = 'green'; // Menampilkan pesan sukses dalam warna hijau
  })
  .catch(error => {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Error: ' + error;
    responseMessage.style.color = 'red'; // Menampilkan pesan error dalam warna merah
  });
}


// Fetch all products from the server
function getProducts() {
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallcontent')
    .then(response => response.json())
    .then(data => {
    console.log(data)
      if (data.status === true) {
        document.getElementById('productTableBody').innerHTML =data.data.map((product, index) => {
          return `<tr>
            <td width="100">${index + 1}</td>
            <td width="200">${product.id}</td>
            <td>${product.content}</td>
            <td style="width: 400px; word-break: break-all;">${product.image}</td>
            <td>${product.description}</td>
            <td>${product.status}</td>
            
      <td><a href="deletecontent.html?id=${product.id}">Delete</a></td>
      <td><a href="editcontent.html?id=${product.id}&content=${product.content}&image=${product.image}&description=${product.description}&content=${product.content}&status=${product.status}">Edit</a></td>
         
      </tr>`;
        }
        ).join('');
      } else {
        console.error('Failed to fetch products');
      }
    })
    .catch(error => console.error('Error:', error));
}

function deleteProduct(productId) {
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/deletecontent', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "Id": productId })
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Failed to delete product');
    }
  })
  .then(data => {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Response from server: ' + data;
    responseMessage.style.color = 'green';
    // After deleting, refresh the product list
    getProducts();
  })
  .catch(error => {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Error: ' + error;
    responseMessage.style.color = 'red';
  });
}