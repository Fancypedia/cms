async function fetchData() {
    try {
      const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/bismillahcontentall');
      const data = await response.json();

      // Display data from the API
      displayContent(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function postData() {
    const data = {
      "id": parseInt(document.getElementById('id').value),
      "Title": document.getElementById('title').value,
      "Tanggal": document.getElementById('tanggal').value,
      "judul": document.getElementById('judul').value,
      "Description": document.getElementById('description').value
    };

    try {
      const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/asdbhjkasdlbkhjbashklflaskdfj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      // Display posted data after successful POST request
      displayData(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function displayContent(content) {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = ''; // Clear content before adding new data

    content.forEach(item => {
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content-item');
      contentDiv.innerHTML = `
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Title:</strong> ${item.Title}</p>
        <p><strong>Tanggal:</strong> ${item.Tanggal}</p>
        <p><strong>Judul:</strong> ${item.judul}</p>
        <p><strong>Description:</strong> ${item.Description}</p>
      `;
      contentElement.appendChild(contentDiv);
    });
  }

  function displayData(result) {
    const dataId = document.getElementById('dataId');
    const dataTitle = document.getElementById('dataTitle');
    const dataTanggal = document.getElementById('dataTanggal');
    const dataJudul = document.getElementById('dataJudul');
    const dataDescription = document.getElementById('dataDescription');
    const dataContent = document.getElementById('dataContent');

    dataId.textContent = result.id;
    dataTitle.textContent = result.Title;
    dataTanggal.textContent = result.Tanggal;
    dataJudul.textContent = result.judul;
    dataDescription.textContent = result.Description;

    // Make the display section visible after displaying the data
    const displaySection = document.querySelector('.data-display');
    displaySection.style.display = 'block';
  }

  // Call fetchData when the page is loaded for the first time
  fetchData();