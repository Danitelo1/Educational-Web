

var loading = document.getElementById("loading-container");
var body = document.getElementById("body")

body.style.display = "none"
setTimeout(() => {
    loading.style.display = "none"
    body.style.display = "block"

}, 2500);
setTimeout(() => {
    document.querySelector(".f1main").src="./Images/teach.png";
}, 30000);
setTimeout(() => {
    document.querySelector(".f1main").src="./Images/Code_teach.png";
}, 60000);

document.querySelector(".pic-2fhed").addEventListener("click", function(){
    document.querySelector(".bg-modal").setAttribute("style", "display: block;");
})
document.querySelector(".bg-close").addEventListener("click", function(){
    document.querySelector(".bg-modal").setAttribute("style", "display: none;");
})

document.querySelector(".signin").addEventListener("click", function(){
    document.querySelector(".si-modal").setAttribute("style", "display: flex;");
})
document.querySelector(".si-close").addEventListener("click", function(){
    document.querySelector(".si-modal").setAttribute("style", "display: none;");
})
