document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.getElementById('tableBody');

    // Fetch data using the Fetch API
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallevent')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(event => {
                const row = document.createElement('tr');
                const content = event.content[0];
                const product = event.product[0];
                row.innerHTML = `
                    <td>${event.id}</td>
                    <td>${event.title}</td>
                    <td>${event.description}</td>
                    <td>${event.tanggal}</td>
                    <td>${event.image}</td>
                    <td>${event.harga}</td>
                    <td>${content.id}</td>
                    <td>${content.content}</td>
                    <td>${content.image}</td>
                    <td>${content.description}</td>
                    <td>${content.status ? 'Active' : 'Inactive'}</td>
                    <td>${product.ID}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td>${product.stock}</td>
                    <td>${product.size}</td>
                    <td><img src="${product.image}" alt="Product Image" class="image is-64x64"></td>
                    <td>${product.status ? 'Active' : 'Inactive'}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});