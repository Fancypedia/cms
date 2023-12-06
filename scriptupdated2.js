import { getCookie } from "./inijs/cookies.js";
import { patchHeader } from "./inijs/api.js";
import { updateproductt } from "./inijs/gudangAPI.js";

export default function editProduct(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let nomorId = parseInt(document.getElementById('nomorId').value);
    let productName = document.getElementById('productName').value;
    let description = document.getElementById('description').value;
    let price = parseInt(document.getElementById('price').value);
    let size = document.getElementById('size').value;
    let stock = parseInt(document.getElementById('stock').value);
    let imageURL = document.getElementById('imageURL').value;
    let status = document.getElementById('status').checked;

    let datainjson = {
        "nomorid": nomorId, // Contoh id yang unik, Anda dapat menggunakan id yang sesuai dengan kebutuhan aplikasi Anda
        "name": productName,
        "description": description,
        "price": price,
        "stock": stock,
        "size": size,
        "image": imageURL,
        "status": status
    };

    patchHeader(updateproductt,datainjson,tokenkey,tokenvalue,responseFunction)
}

function responseFunction(result) {

    if (result.status == true) {
        alert('berhasil update')
        console.log("Berhasil update")
        window.location.href = "getproduct.html";
    } else {
        alert('gagal update')
        console.log("Gagal")
    }
}


