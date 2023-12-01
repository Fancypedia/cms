document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.getElementById('tableBody');

    // Fetch data using the Fetch API
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getalleventglobal')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(event => {
                const row = document.createElement('tr');
                const content = event.content[0];
                const product = event.product[0];
                row.innerHTML = `
                    <td class="p-2 border">${event.id}</td>
                    <td class="p-2 border">${event.title}</td>
                    <td class="p-2 border">${event.description}</td>
                    <td class="p-2 border">${event.tanggal}</td>
                    <td class="p-2 border">${event.image}</td>
                    <td class="p-2 border">${event.harga}</td>
                    <td class="p-2 border">${content.id}</td>
                    <td class="p-2 border">${content.content}</td>
                    <td class="p-2 border">${content.image}</td>
                    <td class="p-2 border">${content.description}</td>
                    <td class="p-2 border">${content.status ? 'Active' : 'Inactive'}</td>
                    <td class="p-2 border">${product.ID}</td>
                    <td class="p-2 border">${product.name}</td>
                    <td class="p-2 border">${product.description}</td>
                    <td class="p-2 border">${product.price}</td>
                    <td class="p-2 border">${product.stock}</td>
                    <td class="p-2 border">${product.size}</td>
                    <td class="p-2 border">${product.image}</td>
                    <td class="p-2 border">${product.status ? 'Active' : 'Inactive'}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});