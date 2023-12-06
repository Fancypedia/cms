function deleteProduct() {
    const productID = parseInt(document.getElementById('productID').value);
  
    // Lakukan validasi jika productID bukan angka
    if (productID === '') {
        alert('Please enter a valid Product ID');
        return;
    }
  
    const endpoint = 'https://asia-southeast2-testlogin-366704.cloudfunctions.net/deletecontent';
    const payload = {
        id: productID
    };
  
      
    console.log('Sending delete request to:', endpoint);
    console.log('Payload:', payload);
    fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        console.log('Response data:', response); // Log the response here
        if (response.ok) {
            document.getElementById('response').innerText = 'Product deleted successfully';
        } else {
            document.getElementById('response').innerText = 'Failed to delete product';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'An error occurred, please try again.';
    });
}


const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const val = document.getElementById("productID");
val.value = id;
console.log(id);