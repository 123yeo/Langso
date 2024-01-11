jQuery(function($) { 
    $( document ).ready(function() {
        //use cases page
        jQuery('select#buttons').select2();

        var buttons_desktop = document.querySelectorAll('.buttons .btn');
        var use_case_for = document.querySelector('.use_case_for');
        
        buttons_desktop.forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                for (let btn of buttons_desktop) {
                    btn.classList.remove("btn_active");
                }
                this.classList.add("btn_active");
                use_case_for.innerHTML = this.innerHTML
                // change use case content 
                change_use_case(this.dataset.slug);
            });
        });
        jQuery('select#buttons').on('select2:select', function (e) {
            e.preventDefault();
            use_case_for.innerHTML = this.options[this.selectedIndex].text
            // change use case content
            change_use_case(e.target.value, true);
        });

        
        // slick on mobile  
        var slick_config =
             {
                lazyLoad: 'progressive',
                dots: true,
                autoplay: false,
                pauseOnHover: false,
                pauseOnFocus: false,
                autoplaySpeed: 6000,
                speed: 1000,
                slidesToShow: 1,
                rows: 3,
                slidesToScroll: 1,
                arrows: false,
                fade: false,
                nextArrow: '<div class="next"></div>',
                prevArrow: '<div class="prev"></div>',
                infinite: true,
                swipe:true,
            }
        function slick_on_mobile(){
            var use_cases_content = $(".row-flex.use_cases");
            var windowWidth = jQuery(document).width();
            var is_slicked = $('.row-flex.use_cases.slick-initialized')
            if (use_cases_content.length > 0) {
                if( windowWidth < 768 && is_slicked.length == 0) {
                    use_cases_content.slick(slick_config);
                }
                if(windowWidth > 786 && is_slicked.length != 0 ){
                    use_cases_content.slick('unslick')
                }
            }
        }
        slick_on_mobile();
        window.addEventListener('resize', function(event) {
            slick_on_mobile();
        }, true);
          // ajax change use case
        const change_use_case = (use_case, is_mobile = false) =>{
            var use_case_row = jQuery('.row-flex.use_cases');
            var category_description = jQuery('#category_description p');
            use_case_row.toggleClass('loading')
            var loader = '<div class="loader"></div>';
            use_case_row.after(loader);
            trigger_other_customer(use_case);
            jQuery.ajax({
                type: "post",
                dataType: "json",
                url: "/wp-admin/admin-ajax.php", 
                data: {
                    action:'change_use_case',
                    use_case: use_case
                },
                success: function(msg){
                    use_case_row.toggleClass('loading')
                    jQuery('.loader').remove();
                    if(is_mobile){
                        use_case_row.slick('unslick')
                    }
                    use_case_row.html(msg.post_list)
                    if(category_description){
                        category_description.html(msg.category_description)   
                    }
                    if(is_mobile){
                        use_case_row.not('.slick-initialized').slick(slick_config)
                    }
                }
            });
        }
        
        setTimeout(() => {
            if(jQuery('select#buttons').length > 0){
                trigger_other_customer(jQuery('select#buttons').val().toLocaleLowerCase());
            }
        }, );
        function trigger_other_customer(use_case){
            const data_filter = {
                filter: use_case,
                taxonomy: 'use_case'
            }
            localStorage.setItem('filter', JSON.stringify(data_filter));
            window.dispatchEvent(new Event("storage"));
        }
        //
    });
});