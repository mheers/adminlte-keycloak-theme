
$(function () {

    // turn all checkboxs into iCheck boxes
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });

    window.languageSelected = function(){
        var redirectUrl = $('#language-picker-dropdown').val();
        window.location.href = redirectUrl;
    }
});
