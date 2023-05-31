
$(document).ready(function(){
    $('.ham-menu').click (function(){
        $(this).toggleClass('open');
        $(".nav-wrapper").toggleClass('open')
      });

    $('filter-here').click(function(){
      $(".leftsection-filter").toggleClass('open')
    })
      
})
