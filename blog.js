// Fetch data from the API endpoint
fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallblog')
    .then(response => response.json())
    .then(data => {
        if (data.status === true) {
            populateTable(data.data);
        } else {
            console.error('Error fetching data:', data.message);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to populate the HTML table with data
function populateTable(data) {
    const tableBody = document.getElementById('blogTableBody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Iterate through each blog in the data
    data.forEach(blog => {
        const row = document.createElement('tr');

        // Populate table cells with blog data
        row.innerHTML = `
            <td class="py-2 px-4 border-b">${blog.id}</td>
            <td class="py-2 px-4 border-b">${blog.title}</td>
            <td class="py-2 px-4 border-b">${blog.tanggal}</td>
            <td class="py-2 px-4 border-b">${blog.judul || '-'}</td>
            <td class="py-2 px-4 border-b">${blog.status ? 'Active' : 'Inactive'}</td>
            <td class="py-2 px-4 border-b">${blog.content ? blog.content[0].id : '-'}</td>
            <td class="py-2 px-4 border-b">${blog.content ? blog.content[0].content : '-'}</td>
            <td class="py-2 px-4 border-b">${blog.content ? blog.content[0].image : '-'}</td>
            <td class="py-2 px-4 border-b">${blog.content ? blog.content[0].description : '-'}</td>
            <td class="py-2 px-4 border-b">${blog.content ? (blog.content[0].status ? 'Active' : 'Inactive') : '-'}</td>
            <td class="py-2 px-4 border-b">
                <button class="bg-blue-500 text-white py-1 px-2 rounded" onclick="updateBlog(${blog.id})">Update</button>
                <button class="bg-red-500 text-white py-1 px-2 rounded" onclick="deleteBlog(${blog.id})">Delete</button>
            </td>
        `;

        // Append the row to the table body
        tableBody.appendChild(row);

        // If there are content items, create separate rows for each
        if (blog.content && blog.content.length > 1) {
            for (let i = 1; i < blog.content.length; i++) {
                const contentRow = document.createElement('tr');
                contentRow.innerHTML = `
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">${blog.content[i].id}</td>
                    <td class="py-2 px-4 border-b">${blog.content[i].content}</td>
                    <td class="py-2 px-4 border-b">${blog.content[i].image}</td>
                    <td class="py-2 px-4 border-b">${blog.content[i].description}</td>
                    <td class="py-2 px-4 border-b">${blog.content[i].status ? 'Active' : 'Inactive'}</td>
                    <td class="py-2 px-4 border-b"></td>
                `;
                tableBody.appendChild(contentRow);
            }
        }
    });
}

// Function to handle the update action
function updateBlog(blogId) {
    // Implement your update logic here
    console.log('Update Blog ID:', blogId);
    alert('Update functionality is not implemented yet.');
}

// Function to handle the delete action
function deleteBlog(blogId) {
    // Implement your delete logic here
    console.log('Delete Blog ID:', blogId);
    alert('Delete functionality is not implemented yet.');
}