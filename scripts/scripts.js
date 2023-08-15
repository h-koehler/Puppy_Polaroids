const bkgd = document.getElementById("noMove");
var modal = document.getElementById("labModal");
console.log(document.getElementById("labBtn"));
var btn = document.getElementById("labBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
    bkgd.style.overflow = "hidden";
}

span.onclick = function () {
    modal.style.display = "none";
    bkgd.style.overflow = "visible";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        bkgd.style.overflow = "visible";
    }
}