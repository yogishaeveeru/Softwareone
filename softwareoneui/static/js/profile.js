$(".dpy-btn").click(function () {
  $(".sidebar .aws .dpy-show").toggleClass("show");
  $(".sidebar .aws .first").toggleClass("rotate");
});
$(".sidebar .aws .aws-active").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
