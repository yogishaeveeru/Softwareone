$(document).ready(function () {
    $('.parent').click(function (event) {
        if ($(event.target).hasClass('arrow')) {
            // Toggle content when the arrow is clicked
            $(this).find('.content').slideToggle();
            $(this).find('.arrow').toggleClass('rotate');
        } else if ($(event.target).hasClass('parent')) {
            // Toggle content when the parent div is clicked
            $(this).find('.content').slideToggle();
            $(this).find('.arrow').toggleClass('rotate');
        }
    });
});


const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
radio1.addEventListener("change", function() {
    if (radio1.checked) {
        content1.style.display = "block";
        content2.style.display = "none";
    }
});

radio2.addEventListener("change", function() {
    if (radio2.checked) {
        content1.style.display = "none";
        content2.style.display = "block";
    }
});

