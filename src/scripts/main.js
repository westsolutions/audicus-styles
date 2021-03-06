import $ from 'jquery';
window.$ = window.jQuery = $;
import 'bootstrap/dist/js/bootstrap';


$(document).ready(function(){
  var title = $("title").text();
  console.log(title + " is ready.");

  //input label styles
  $(".mat-div input").focus(function(){
    $(this).parent().addClass("is-active is-completed");
  });

  $(".mat-div input").focusout(function(){
    if($(this).val() === "")
      $(this).parent().removeClass("is-completed");
    $(this).parent().removeClass("is-active");
  })
});
