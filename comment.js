// Fungsi untuk mendapatkan data dari API dan menampilkan dalam tabel
async function fetchDataAndDisplay() {
    try {
        const response = await fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallcomment');
        const result = await response.json();

        // Periksa status dan pastikan data ada sebelum melanjutkan
        if (result.status && result.data) {
            const commentTableBody = document.getElementById('commentTableBody');

            // Mengosongkan isi tabel sebelum menambahkan data baru
            commentTableBody.innerHTML = '';

            // Menambahkan data ke dalam tabel
            result.data.forEach(comment => {
                const row = document.createElement('tr');

                const idCell = document.createElement('td');
                idCell.textContent = comment.id;
                row.appendChild(idCell);

                const usernameCell = document.createElement('td');
                usernameCell.textContent = comment.username;
                row.appendChild(usernameCell);

                const commentCell = document.createElement('td');
                commentCell.textContent = comment.comment;
                row.appendChild(commentCell);

                const questionsCell = document.createElement('td');
                questionsCell.textContent = comment.questions;
                row.appendChild(questionsCell);

                const tanggalCell = document.createElement('td');
                tanggalCell.textContent = comment.tanggal;
                row.appendChild(tanggalCell);

                const statusCell = document.createElement('td');
                statusCell.textContent = comment.status ? 'Active' : 'Inactive';
                row.appendChild(statusCell);

                commentTableBody.appendChild(row);
            });
        } else {
            console.error('Error in response:', result.message);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fungsi untuk mengirim formulir
function submitForm() {
    // Mendapatkan nilai dari form
    const formData = {
        id: parseInt(document.getElementById('id').value),
        username: document.getElementById('username').value,
        comment: document.getElementById('comment').value,
        questions: document.getElementById('questions').value,
        tanggal: document.getElementById('tanggal').value,
        status: document.getElementById('status').checked,
    };

    // Melakukan request ke endpoint
    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/createcomment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            // Handle response dari server jika diperlukan
            console.log(data);
            // Setelah mengirim formulir, perbarui tabel dengan data terbaru
            fetchDataAndDisplay();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Panggil fungsi untuk pertama kali
fetchDataAndDisplay();