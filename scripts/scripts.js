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
        modal.style.display = "block"; // applies changes to foreground & background
        bkgd.style.overflow = "hidden";
    });
});

spans.forEach(function (span) {
    span.addEventListener('click', function () {
        let modal = this.parentElement.parentElement; // gets the modal by looking at the Grandparent (TM)
        modal.style.display = "none"; // applies changes to foreground & background
        bkgd.style.overflow = "visible";
    });
});

window.onclick = function (event) { // allows user to click outside modal to close it
    if (event.target == currentModal) {
        currentModal.style.display = "none";
    }
}