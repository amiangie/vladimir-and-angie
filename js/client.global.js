/* Create HTML5 elements for ancient browsers */
document.createElement('header')
document.createElement('footer')
document.createElement('nav')
document.createElement('article')
document.createElement('section')
/* end Create HTML5 elements for ancient browsers */

$(function() {
    $('.js-nav-link').on('click', function(e){
        e.preventDefault();
        $('.js-nav-link').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.js-nav-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('js-nav-link').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
    $(document).on("scroll", onScroll);
})
