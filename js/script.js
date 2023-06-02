$(function(){

   new WOW().init();

 
   $(".work-item a").on('click', function(){
      var imgSrc = $(this).children('.work-img').attr('src');
      var imgSrcSp = $(this).children('.work-img-sp').attr('src');
      var url = $(this).attr('href');
      $(".modal-img").children().attr('src', imgSrc);
      $(".modal-img-sp").children().attr('src', imgSrcSp);
      if(!url.length){
         $(".modal-btn").removeClass('is-active');
         
      } else{
         $(".modal-btn").addClass('is-active');
         $(".modal-btn").children().attr('href', url);
      }
      $(".modal").fadeIn();
      $('body,html').css('overflow-y', 'hidden');
      return false;
   });

   $(".modal-overlay").click(function(){
      $('.modal').fadeOut(200);
      $('body,html').css('overflow-y', 'visible');
      return false;
   });

   jQuery('a[href^="#"]').on('click', function(){

      var header = jQuery('header').innerHeight();
      var id = jQuery(this).attr("href");
      var position = 0;
      if (id != '#'){
        var position = jQuery(id).offset().top - header;
      }
      jQuery('html, body').animate({
        scrollTop: position
      },
      300)
    });
})

