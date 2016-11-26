$(function () {
    $('.time-selector').datetimepicker({
        format: 'LT'
    }).hide();

    $('.day input[type="checkbox"]').click(function ()
    {
        var $timeSelector = $(this).parent().find('.time-selector');
        if ($(this).prop('checked'))
        {
            $timeSelector.show();
        }
        else
        {
            $timeSelector.hide();
        }
    });
});