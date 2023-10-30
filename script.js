async function postData() {
    const data = {
      "id": parseInt(document.getElementById('id').value),
      "Name": document.getElementById('name').value,
      "Description": document.getElementById('description').value,
      "Price": parseInt(document.getElementById('price').value),
      "Size": document.getElementById('size').value,
      "Stock": parseInt(document.getElementById('stock').value),
      "Image": document.getElementById('image').value
    };
  
    try {
      const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/fixxlastppost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      // Show product details after successful POST request
      displayProduct(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function displayProduct(product) {
    document.getElementById('productId').textContent = product.id;
    document.getElementById('productName').textContent = product.Name;
    document.getElementById('productDescription').textContent = product.Description;
    document.getElementById('productPrice').textContent = product.Price;
    document.getElementById('productSize').textContent = product.Size;
    document.getElementById('productStock').textContent = product.Stock;
    document.getElementById('productImage').src = product.Image;
  
    // Show the product details section
    document.querySelector('.product-display').style.display = 'block';
  }
  