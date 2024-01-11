(function($) {
    $(document).ready(function() {
        leftarea = $('#left-area');
        pageNavi = leftarea.find('.wp-pagenavi');
        pageNavigation = leftarea.find('.pagination');
 
        if ( pageNavi.length ) {
            pagenav = $('#left-area .wp-pagenavi');
        }
        else {
            pagenav = $('#left-area .pagination');
        }
        pagenav.detach();
        leftarea.after(pagenav);
    });
})(jQuery)
