async function updateProduct(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const description = document.getElementById('Description').value;
    const imageURL = document.getElementById('imageURL').value;
    const status = document.getElementById('status').checked;
    const content = document.getElementById('Content').value;
    const updatedProduct = {
        id: parseInt(id),
        Description: description,
        content: content,
        Image: imageURL,
        status: status
    };
    try {
        const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/updatecontent', {
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
