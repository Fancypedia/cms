async function updateProduct(event) {
    event.preventDefault();

    const nomorId = document.getElementById('nomorId').value;
    const productName = document.getElementById('productName').value;
    const description = document.getElementById('description').value;
    const price = parseInt(document.getElementById('price').value);
    const size = document.getElementById('size').value;
    const stock = parseInt(document.getElementById('stock').value);
    const imageURL = document.getElementById('imageURL').value;
    const status = document.getElementById('status').checked;

    const updatedProduct = {
        Nomorid: parseInt(nomorId),
        Name: productName,
        Description: description,
        Price: price,
        Size: size,
        Stock: stock,
        Image: imageURL,
        status: status
    };

    try {
        const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/updateproduct', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Product updated:', result);
            alert('Product updated successfully!');
        } else {
            throw new Error('Product update failed');
        }
    } catch (error) {
        console.error('Error updating product:', error);
        alert('Product update failed. Please try again.');
    }
}
