    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getgallery');
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }

    // Function to render the table rows
    function renderTableRows(data) {
      const tableBody = document.getElementById('galleryTableBody');

      data.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td class="py-2 px-4 border-b">${item.id}</td>
          <td class="py-2 px-4 border-b">${item.title}</td>
          <td class="py-2 px-4 border-b">${item.description}</td>
          <td class="py-2 px-4 border-b">${item.image}</td>
          <td class="py-2 px-4 border-b">${item.status ? 'Active' : 'Inactive'}</td>
        `;

        tableBody.appendChild(row);
      });
    }

    // Fetch data and render the table rows
    fetchData().then(data => {
      renderTableRows(data);
    });