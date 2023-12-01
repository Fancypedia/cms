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

        // value params
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");
        const name = searchParams.get("name");
        const description = searchParams.get("description");
        const price = searchParams.get("price");
        const stock = searchParams.get("stock");
        const size = searchParams.get("size");
        const image = searchParams.get("image");
        const status = searchParams.get("status");

        // change value form
        const val = document.getElementById("nomorId").value = id;
        const vallo = document.getElementById("productName").value = name;
        const vallo2 = document.getElementById("description").value = description;
        const vallo3 = document.getElementById("price").value = price;
        const vallo4 = document.getElementById("stock").value = stock;
        const vallo5 = document.getElementById("size").value = size;
        const vallo6 = document.getElementById("imageURL").value = image;
        const vallo7 = document.getElementById("status").checked = status === 'true';