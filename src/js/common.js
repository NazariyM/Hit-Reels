$(document).ready(function() {

    // clear placeholder

    (function() {
        var el = $('input, textarea');
        el.focus(function() {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function() {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }());

});
