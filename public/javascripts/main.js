$(document)
  .ready(function() {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      });

    // create sidebar and attach to menu open
    // $('.ui.sidebar')
    //   .sidebar('attach events', '.toc.item')
    // ;

    $('#context1 .menu .item')
      .tab({
        // special keyword works same as above
        context: 'parent'
      });

    // Efectos para los anchors del Side menu
    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 500);
        }
    });
    // Mostrar y ocultar Side menu
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $(".side-menu").stop().animate({
                opacity: 1
            }, 100);
        } else {
            $(".side-menu").stop().animate({
                opacity: 0
            }, 100);
        }
    })

    // $('.side-menu-item').click(function(){
    //     $('.side-menu-item').removeClass("active");
    //     $(this).addClass("active");
    // });
    // $('body').scrollspy({target: ".side-menu"});
});
