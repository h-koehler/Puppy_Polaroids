const bkgd = document.getElementById("noMove");



let labModal = document.getElementById("labModal");
let berneseModal = document.getElementById("berneseModal");
let shibaModal = document.getElementById("shibaModal");
let goldenModal = document.getElementById("goldenModal");
let lapphundModal = document.getElementById("lapphundModal");
let samoyedModal = document.getElementById("samoyedModal");

let span = document.getElementsByClassName("close")[0];
let modalArr = [labModal, berneseModal, shibaModal, lapphundModal, samoyedModal];

let polaroids = document.querySelectorAll('.polaroid');
let counter = 0;

polaroids.forEach(function (polaroid, counter) {
    polaroid.addEventListener('click', function() {
    modalArr[counter].style.display = "block";
    bkgd.style.overflow = "hidden";
    counter++;
    });
});

span.forEach() closeModalSpan(modal) {
    modal.style.display = "none";
    bkgd.style.overflow = "visible";
}

function closeModalWindow(event, modal) {
    if (event.target == modal) {
        modal.style.display = "none";
        bkgd.style.overflow = "visible";
    }
}