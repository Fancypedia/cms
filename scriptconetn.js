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
  