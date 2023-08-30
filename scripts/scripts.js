const bkgd = document.getElementById("noMove");
let spans = document.querySelectorAll(".close");
let polaroids = document.querySelectorAll('.polaroid');
let currentModal;
let currentSidebar;

// Creates functions to open & close the modals. This creation of functions occurs on load.
polaroids.forEach(function (polaroid) {
    polaroid.addEventListener('click', function () {
        let modalId = polaroid.id + "Modal"; // gets the ID of the modal
        let modal = document.getElementById(modalId); // gets the modal using the id
        currentModal = modal; // updates the current modal
        modal.style.display = "block"; // opens modal
        bkgd.style.overflow = "hidden"; // freezes background
    });
    polaroid.addEventListener('mouseover', function () {
        let sidebarId = polaroid.id + "Sidebar"; // gets the ID of the sidebar
        let sidebar = document.getElementById(sidebarId); // gets the sidebar using the id
        currentSidebar = sidebar; // updates the current sidebar
        sidebar.style.visibility = "visible"; // opens sidebar
    });
    polaroid.addEventListener('mouseout', function () {
        let sidebarId = polaroid.id + "Sidebar"; // gets the ID of the sidebar
        let sidebar = document.getElementById(sidebarId); // gets the sidebar using the id
        currentSidebar = sidebar; // updates the current sidebar
        sidebar.style.visibility = "hidden"; // opens sidebar
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