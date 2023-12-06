// value params
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const username = searchParams.get("username");
const comment = searchParams.get("comment");
const questions = searchParams.get("questions");
const tanggal = searchParams.get("tanggal");
const status = searchParams.get("status");

// change value form
document.getElementById("id").value = id;
document.getElementById("username").value = username;
document.getElementById("comment").value = comment;
document.getElementById("questions").value = questions;
document.getElementById("tanggal").value = tanggal;
document.getElementById("status").checked = status === 'true';