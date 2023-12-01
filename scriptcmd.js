async function postData() {
    const data = {
      "id": parseInt(document.getElementById('id').value),
      "Username": document.getElementById('username').value,
      "comment": document.getElementById('comment').value,
      "Questions": document.getElementById('questions').value,
      "Tanggal": document.getElementById('tanggal').value
    };
  
    try {
      const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcommentt', {
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
    responseHeader.textContent = 'Response from Create Comment:';
    responseContainer.appendChild(responseHeader);
  
    const responseParagraph = document.createElement('p');
    responseParagraph.textContent = JSON.stringify(result, null, 2); // Stringify the response for better display
    responseContainer.appendChild(responseParagraph);
  }

  function getData() {
    fetch('https://us-central1-testlogin-366704.cloudfunctions.net/getAllcommned')
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById('data').innerHTML = data;
    }
    )
    .catch(error => {
        console.log('Error:', error);
    });
}
