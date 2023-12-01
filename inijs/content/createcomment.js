import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createcommentt } from "../gudangAPI.js";
import { getCookie } from "../cookies.js";


export default function createKomen(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "id": parseInt(getValue("id")),
        "username": getValue("username"),
        "comment": getValue("comment"),
        "answer": getValue("answer"),
        "questions": getValue("questions"),
        "tanggal": getValue("tanggal"),
        "status": true
    }
    
    postBiasa(createcommentt,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.message == "Berhasil Input data") {
        alert("Berhasil Input Data");
        window.location.href = "../signin/index.html";
    }
}