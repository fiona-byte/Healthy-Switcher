$(document).ready(function(){

    $('.toggle-icon').click(function() {
        var nav = $('.nav-items');
        var icon = $('.toggle-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-nav-icon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-nav-icon-round');
        } else {
            icon.addClass('ion-nav-icon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});