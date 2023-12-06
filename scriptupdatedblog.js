// value params
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const content_one = searchParams.get("content_one");
const content_two = searchParams.get("content_two");
const image = searchParams.get("image");
const description = searchParams.get("description");
const status = searchParams.get("status");

// change value form
document.getElementById("id").value = id;
document.getElementById("content_one").value = content_one;
document.getElementById("content_two").value = content_two;
document.getElementById("image").value = image;
document.getElementById("description").value = description;
document.getElementById("status").checked = status === 'true';