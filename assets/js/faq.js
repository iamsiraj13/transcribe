$(document).ready((){
    $(function ($) {
        $(".accordion-content").css("display", "block");
    
        $(".accordion-title").click(function () {
          $(".accordion-title").not(this).removeClass("open");
    
          $(".accordion-title").not(this).next().slideUp(300);
    
          $(this).toggleClass("open");
    
          $(this).next().slideToggle(300);
        });
      });
});