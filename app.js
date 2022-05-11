const btn = document.getElementById("btn");
const blur = document.getElementById("blur");
const headerDiv = document.getElementById("headerDiv");

function toggle(){
    blur.classList.toggle('active');
    btn.classList.toggle('active');
    headerDiv.classList.toggle('active');
}