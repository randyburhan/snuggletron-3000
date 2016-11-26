$(function () {
    page0();
    page1();
});

function page0()
{
    var $stationPicker = $('#station-picker').hide();
    var $comboBox = $stationPicker.find('select');

    function populateStations(transportMode)
    {
        $comboBox.empty();

        switch (transportMode)
        {
            case "train":
                $comboBox.append(new Option("Mascot"));
                $comboBox.append(new Option("Green Square"));
                $comboBox.append(new Option("Central"));
                break;
            case "ferry":
                $comboBox.append(new Option("Manly"));
                $comboBox.append(new Option("Circular Quay"));
                $comboBox.append(new Option("Drummoyne"));
                break;
            case "bus":
                $comboBox.append(new Option("Railway Sq."));
                $comboBox.append(new Option("Paddington"));
                $comboBox.append(new Option("Newtown"));
                break;
        }

        $comboBox.first().prop('selectedIndex', 1);
    }
   
    $('#transport-picker .btn').click(function ()
    {
        $stationPicker.show();
        populateStations($(this).find('input').attr('name'));
    });
}

function page1()
{
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
}