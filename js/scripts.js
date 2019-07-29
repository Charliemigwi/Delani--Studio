//Code to toggle we-do
$(function(){
  $(".item-1").click(function(){
    $("#services1").toggle();
    $("#des1").toggle();
  });
  $(".item-2").click(function(){
    $("#services2").toggle();
    $("#des2").toggle();
  });
  $(".item-3").click(function(){
    $("#services3").toggle();
    $("#des3").toggle();
  });
});

// For hover effect on PORTFOLIO
$(function(){
  $("div.image-frame").hover(function() {
    $(".classAdd1").addClass("mask flex-center rgba-red-strong");
});
$("div.image-frame").hover(function() {
    $(".classAdd2").addClass("mask flex-center rgba-blue-light");
});
$("div.image-frame").hover(function() {
    $(".classAdd3").addClass("mask flex-center rgba-green-slight");
});
$("div.image-frame").hover(function() {
    $(".classAdd4").addClass("mask flex-center");
});
});
