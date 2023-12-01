import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createproductfix } from "../gudangAPI.js";
import { getCookie } from "../cookies.js";


export default function buatPRODUK(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "ID": "000000000000000000000000",
        "nomorid": parseInt(getValue("nomorid")),
        "name": getValue("name"),
        "description": getValue("description"),
        "price": parseInt(getValue("price")),
        "stock": parseInt(getValue("stock")),
        "size": getValue("size"),
        "image": getValue("image"),
        "status": true
    }
    
    postBiasa(createproductfix,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.message == "Berhasil Input data") {
        alert("Berhasil Input Data");
        window.location.href = "../signin/index.html";
    }
}