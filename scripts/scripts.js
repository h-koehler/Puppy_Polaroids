const bkgd = document.getElementById("noMove");

let labModal = document.getElementById("labModal");
let berneseModal = document.getElementById("berneseModal");
let shibaModal = document.getElementById("shibaModal");
let goldenModal = document.getElementById("goldenModal");
let lapphundModal = document.getElementById("lapphundModal");
let samoyedModal = document.getElementById("samoyedModal");

let labBtn = document.getElementById("labBtn");
let berneseBtn = document.getElementById("berneseBtn");
let shibaBtn = document.getElementById("shibaBtn");
let goldenBtn = document.getElementById("goldenBtn");
let lapphundBtn = document.getElementById("lapphundBtn");
let samoyedBtn = document.getElementById("samoyedBtn");

let span = document.getElementsByClassName("close")[0];


labBtn.onclick = function () {
    labModal.style.display = "block";
    bkgd.style.overflow = "hidden";
}

span.onclick = function () {
    labModal.style.display = "none";
    bkgd.style.overflow = "visible";
}

window.onclick = function (event) {
    if (event.target == labModal) {
        labModal.style.display = "none";
        bkgd.style.overflow = "visible";
    }
}