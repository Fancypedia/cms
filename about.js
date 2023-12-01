document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.getElementById('tableBody');

    // Fetch data using the Fetch API
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallabout')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(about => {
                const row = document.createElement('tr');
                const content = about.content[0];
                const product = about.product[0];
                row.innerHTML = `
                    <td>${about.id}</td>
                    <td>${about.title}</td>
                    <td>${about.description}</td>
                    <td>${about.image}</td>
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