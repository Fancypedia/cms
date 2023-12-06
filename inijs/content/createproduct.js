

import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createproductfix } from "../gudangAPI.js";
import { getCookie } from "../cookies.js";


export default function buatprodukkk(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "Nomorid": parseInt(getValue("idnomor")),
        "Name": getValue("nama"),
        "Description": getValue("deskripsi"),
        "Price": parseInt(getValue("harga")),
        "Size": getValue("ukuran"),
        "Stock": parseInt(getValue("stok")),
        "Image": getValue("gambar"),
        "status": true
    }
    
    postBiasa(createproductfix,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Input Data");
        window.location.href = "getproduct.html";
    }
}