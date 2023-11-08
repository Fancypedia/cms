async function postData() {
    const data = {
      "id": parseInt(document.getElementById('id').value),
      "Content": document.getElementById('content').value,
      "Image": document.getElementById('image').value,
      "Description": document.getElementById('description').value
    };
  
    try {
      const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcontent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      displayResponse(result); // Call function to display the response
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function displayResponse(result) {
    const responseContainer = document.getElementById('response-container');
  
    // Clear previous content
    responseContainer.innerHTML = '';
  
    // Create elements to display the response data
    const responseHeader = document.createElement('h3');
    responseHeader.textContent = 'Response from Create Content:';
    responseContainer.appendChild(responseHeader);
  
    const responseParagraph = document.createElement('p');
    responseParagraph.textContent = JSON.stringify(result, null, 2); // Stringify the response for better display
    responseContainer.appendChild(responseParagraph);
  }
  

  function getData() {
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/bismillahcontentall')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Convert response to JSON format
      })
      .then(data => {
        const dataTableBody = document.getElementById('data-table-body');
        dataTableBody.innerHTML = '';
  
        data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.ID}</td>
            <td>${item.content}</td>
            <td>${item.image}</td>
            <td>${item.description}</td>
          `;
          dataTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', getData);