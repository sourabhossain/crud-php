document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');
    var links = document.querySelectorAll(".delete");

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
            }
        });
    }
});