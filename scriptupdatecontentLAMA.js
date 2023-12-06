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


// value params
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const Content = searchParams.get("content");
const Description = searchParams.get("description");
const image = searchParams.get("image");
const status = searchParams.get("status");
console.log(status);
// change value form
const val = document.getElementById("id").value = id;
const vallo5 = document.getElementById("Content").value = Content;
const vallo2 = document.getElementById("Description").value = Description;
const vallo6 = document.getElementById("imageURL").value = image;
const vallo7 = document.getElementById("status").checked = status === 'true';
console.log(vallo7);