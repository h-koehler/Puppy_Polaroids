const bkgd = document.getElementById("noMove");
let modal = document.getElementById("labModal");
let btn = document.getElementById("labBtn");
let span = document.getElementsByClassName("close")[0];


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