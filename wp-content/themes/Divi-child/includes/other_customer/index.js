jQuery(function($) {
    $( document ).ready(function() {
        // other_customer
        var slick_config_other_customer =
        {
            lazyLoad: 'progressive',
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            appendDots: "#other_customer_dots",
            fade: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            infinite: false,
            // centerPadding: '470px',
            responsive: [
            {
            breakpoint: 980,
            settings: {
                slidesToShow: 1,
                asNavFor: "#other_customer_desc",
                centerMode: true,
                infinite: false,
                focusOnSelect: true,
                centerPadding: '70px',
                // dots: false,
            }
            }]
        }
        var other_customer = jQuery('#other_customer_logo .et_pb_column');
        if (other_customer.length > 0) {
            other_customer.slick(slick_config_other_customer)
        }

        // slick description 
        var slick_config_other_cutomer_desc = {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            infinite: false,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            swipe: false,
            centerPadding: '0',
            responsive: [
             {
               breakpoint: 980,
               settings: {
                 slidesToShow: 1,
                 centerMode: true,
                 centerPadding: '0',
               }
             }]
         }
 
         var description = jQuery("#other_customer_desc");
         if (description.length > 0) {
             description.slick(slick_config_other_cutomer_desc)
             description[0].slick.cssTransitions = false
         }

         
         window.addEventListener('storage', () => {
            var filter = window.localStorage.getItem('filter');
            update_other_customer(filter);
          });

          attach_click_fn();
          function attach_click_fn(){
            var other_customer_active = jQuery('#other_customer_logo .et_pb_column .slick-active');
            if(other_customer_active){
                jQuery(other_customer_active[0]).css({
                    "filter": "grayscale(0)"
                })
                jQuery('#other_customer_logo .et_pb_column .slick-slide').each(function(elm){
                    jQuery(this).on("click", function(e){
                        reset_logo_greyscale();
                        $(this).css({
                            "filter": "grayscale(0)"
                        })
                        jQuery("#other_customer_desc").slick('slickGoTo', jQuery(this).data('slick-index'));
                    })
                });
            }
          }
          function reset_logo_greyscale(){
            var other_customer_active = jQuery('#other_customer_logo .et_pb_column .slick-slide');
            if(other_customer_active){
                other_customer_active.each(function(elm){
                    jQuery(this).css({
                        "filter": "grayscale(1)"
                    })
                });
            }
          }
          function update_other_customer(filter){
            const data_filter = JSON.parse(filter);
            const other_customer_row = jQuery('#other_customer_display');
            jQuery.ajax({
                type: "post",
                dataType: "json",
                url: "/wp-admin/admin-ajax.php", 
                data: {
                    action:'change_other_customer',
                    taxonomy: data_filter.taxonomy,
                    filter: data_filter.filter
                },
                success: function(msg){
                    if(msg == '0'){
                        msg = '';
                    }
                    if(jQuery('#other_customer_logo .et_pb_column').is('.slick-initialized')){
                        jQuery('#other_customer_logo .et_pb_column').slick('unslick')
                        jQuery("#other_customer_desc").slick('unslick')
                    }
                        other_customer_row.html(msg);
                        jQuery('#other_customer_logo .et_pb_column').not('.slick-initialized').slick(slick_config_other_customer)
                        jQuery("#other_customer_desc").not('.slick-initialized').slick(slick_config_other_cutomer_desc)
                        attach_click_fn();
                }
            });
          }
         //
    });
});