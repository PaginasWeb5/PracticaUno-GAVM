$(function(){
    //letterning
    $('.nombre-sitio').lettering();

    //scroll
    var windowHeight = $(window).height();
    var AlturaBarra = $('.barra').innerHeight();
    
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll >  windowHeight){

          console.log("ya rebasate la altura de la pantalla");
          $('.barra').addClass('fixed');
          $('body').css({'margin-top': AlturaBarra + 'px'});
        }
        else{
            console.log("aun no ");
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    //menu sandwich
   $('.menu-sandwich').on('click', function(){
        $('.navegacion_prin').slideToggle(); //mescla de slide up slide down
   });
});