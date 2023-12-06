import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createblogg } from "../gudangAPI.js";
import { getCookie } from "../cookies.js";


export default function createBlog(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "id": parseInt(getValue("id")),
        "content_one": getValue("contentone"),
        "content_two": getValue("contenttwo"),
        "image": getValue("image"),
        // "title": getValue("title"),
        // "title_two": getValue("titletwo"),
        "description": getValue("description"),
        // "description_two": getValue("description2"),
        // "description_3": getValue("description3"),
        "status": true
    }
    
    postBiasa(createblogg,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Input Data");
        window.location.href = "../getproduct.html";
    }
}