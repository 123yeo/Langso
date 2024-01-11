jQuery(function($) {         


// collapsible mobile menu
 function setup_collapsible_submenus() {
        var $menu = $('#mobile_menu'),
            top_level_link = '#mobile_menu .menu-item-has-children > a';
             
        $menu.find('a').each(function() {
            $(this).off('click');
              
            if ( $(this).is(top_level_link) ) {
                $(this).attr('href', '#');
            }
              
            if ( ! $(this).siblings('.sub-menu').length ) {
                $(this).on('click', function(event) {
                    $(this).parents('.mobile_nav').trigger('click');
                });
            } else {
                $(this).on('click', function(event) {
                    event.preventDefault();
                    $(this).parent().toggleClass('visible');
                });
            }
        });
    }
      
    $(window).load(function() {
        setTimeout(function() {
            setup_collapsible_submenus();
        }, 700);
    });

    $( document ).ready(function() {
    //footer menu mobile

    var menus = jQuery('.footer-widget:not(:last-child) h4');
    menus.each(function() {
        jQuery(this).on('click', () =>{
            if(jQuery(this).siblings('.show').length){
                jQuery(this).removeClass("show");
                jQuery(this).siblings().removeClass("show");
            }else{
                jQuery(this).siblings().addClass("show");
                jQuery(this).addClass("show");
            }
        });
    })

    });

}); 


