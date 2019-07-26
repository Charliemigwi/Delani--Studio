//Code to toggle we-do
$(function(){
  $(".item1").click(function(){
    $("#services1").toggle();
    $("#desc1").toggle();
  });
  $(".item2").click(function(){
    $("#services2").toggle();
    $("#desc2").toggle();
  });
  $(".item3").click(function(){
    $("#services3").toggle();
    $("#desc3").toggle();
  });
});
