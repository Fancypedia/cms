// value params
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const name = searchParams.get("name");
const description = searchParams.get("description");
const price = searchParams.get("price");
const stock = searchParams.get("stock");
const size = searchParams.get("size");
const image = searchParams.get("image");
const status = searchParams.get("status");

// change value form
document.getElementById("nomorId").value = id;
document.getElementById("productName").value = name;
document.getElementById("description").value = description;
document.getElementById("price").value = price;
document.getElementById("stock").value = stock;
document.getElementById("size").value = size;
document.getElementById("imageURL").value = image;
document.getElementById("status").checked = status === 'true';