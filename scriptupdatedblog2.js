import { getCookie } from "./inijs/cookies.js";
import { patchHeader } from "./inijs/api.js";
import { upadateblog_1 } from "./inijs/gudangAPI.js";

export default function editBlog(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let id = parseInt(document.getElementById('id').value);
    let content_one = document.getElementById('content_one').value;
    let content_two = document.getElementById('content_two').value;
    let image = document.getElementById('image').value;
    let description = document.getElementById('description').value;
    let status = document.getElementById('status').checked;

    let datainjson = {
        "id": id, // Contoh id yang unik, Anda dapat menggunakan id yang sesuai dengan kebutuhan aplikasi Anda
        "content_one": content_one,
        "content_two": content_two,
        "image": image,
        "description": description,
        "status": status
    };

    patchHeader(upadateblog_1,datainjson,tokenkey,tokenvalue,responseFunction)
}

function responseFunction(result) {
    console.log(result.status)
}


