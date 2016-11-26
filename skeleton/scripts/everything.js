$(function () {
    page0();
    page1();
    page2();
    page3();
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
    var $monday = $('.day');
    $monday.find('button').text('Monday');
    $monday.find('.time-selector').hide();

    var $times = $monday.find('select');
    var times = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    times.forEach(function (time)
    {
        $times.append(new Option(time.toString() + ':00'));
        $times.append(new Option(time.toString() + ':30'));
    });

    var days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days.forEach(function (day)
    {
        var $day = $monday.clone();
        $day.find('button').text(day);
        $monday.parent().append($day);
    });

    $times.change(function ()
    {
        var name = this.name;
        $(this).closest('.day').siblings().find('select[name=' + name + ']').val(this.value);
    });

    $('.day .btn').click(function ()
    {
        var $timeSelector = $(this).parent().find('.time-selector');
        if ($(this).is('.active'))
        {
             $timeSelector.hide();
        }
        else
        {
            $timeSelector.show();
        }
    });
}

function page2()
{
    var $body = $('.commuter-registration-2');
    $body.find('.box-graphics-medium').hide();
    $body.find('.box-graphics-large').hide();

    $body.find('.btn-group .btn').click(function ()
    {
        $body.find('.box-graphics-small').hide();
        $body.find('.box-graphics-medium').hide();
        $body.find('.box-graphics-large').hide();
        var name = $(this).find('input').attr('name');
        $body.find('.box-graphics-' + name).show();
    });
}

function page3()
{
    var $body = $('.commuter-registration-3');
    if (!$body.length)
        return;

    var $dropoff = $body.find('.drop-off-time select');
    var times = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    times.forEach(function (time)
    {
        $dropoff.append(new Option(time.toString() + ':00'));
        $dropoff.append(new Option(time.toString() + ':30'));
    });

    var $slider =  $body.find('input.slider');
    $slider.parent().hide();
    $body.find('.btn').click(function ()
    {
        if ($(this).find('input').attr('name') === 'anytime')
        {
             $slider.parent().hide();
        }
        else
        {
            $slider.parent().show();
        }
    });

    $slider.slider({
        step: 0.5,
        range: true,
        ticks: [0, 6, 12, 18, 24],
        ticks_positions: [0, 25, 50, 75, 100],
        ticks_labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        tooltip: 'hide',
        formatter: function(value) {
            var from = Math.floor(value[0]).toString() + ":" + (value[0] % 1 ? "30" : "00");
            var to = Math.floor(value[1]).toString() + ":" + (value[1] % 1 ? "30" : "00");
		    return 'Between: ' + from + ' and ' + to;
	    },
    }).on('slide', function (ev) {
        var value = ev.value;
        var from = Math.floor(value[0]).toString() + ":" + (value[0] % 1 ? "30" : "00");
        var to = Math.floor(value[1]).toString() + ":" + (value[1] % 1 ? "30" : "00");
	    $slider.parent().find('.inner').text(from + ' and ' + to);
    });

    
}