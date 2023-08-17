const bkgd = document.getElementById("noMove");
let spans = document.querySelectorAll(".close");
let polaroids = document.querySelectorAll('.polaroid');
let currentModal;

// Creates functions to open & close the modals. This creation of functions occurs on load.
polaroids.forEach(function (polaroid) {
    polaroid.addEventListener('click', function () {
        let modalId = polaroid.id + "Modal"; // gets the ID of the modal
        let modal = document.getElementById(modalId); // gets the modal using the id
        currentModal = modal; // updates the current modal
        modal.style.display = "block"; // opens modal
        bkgd.style.overflow = "hidden"; // freezes background
    });
});

spans.forEach(function (span) {
    span.addEventListener('click', function () {
        let modal = this.parentElement.parentElement; // gets the modal by looking at the Grandparent (TM)
        modal.style.display = "none"; // closes modal
        bkgd.style.overflow = "visible"; // unfrezes background
    });
});

window.onclick = function (event) { // allows user to click outside modal to close it
    if (event.target == currentModal) {
        currentModal.style.display = "none";
        bkgd.style.overflow = "visible";
    }
}