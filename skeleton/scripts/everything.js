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
                $comboBox.append(new Option("Central"));
                $comboBox.append(new Option("Parramatta"));
                $comboBox.append(new Option("Chatswood"));
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

        $comboBox.eq(1).prop('selectedIndex', 1);
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
        var isPeak = [7,8,9,16,17,18,19].indexOf(time) > -1;
        $times.append(new Option(time.toString() + ':00'));
        if (isPeak) $times.append(new Option(time.toString() + ':15'));
        $times.append(new Option(time.toString() + ':30'));
        if (isPeak) $times.append(new Option(time.toString() + ':45'));
    });
    $times.first().find('option:contains("8:00")').first().prop('selected', true);
    $times.eq(1).find('option:contains("17:30")').first().prop('selected', true);

    var days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days.forEach(function (day)
    {
        var $day = $monday.clone();
        $day.find('button').text(day);
        $monday.parent().append($day);
        $day.find('select option:contains("8:00")').slice(0, 1).prop('selected', true);
        $day.find('select').eq(1).find('option:contains("17:30")').slice(0, 1).prop('selected', true);
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
    $dropoff.find('option:contains("7:00")').first().prop('selected', true);

    var $slider =  $body.find('input.slider');
    var $sliderContainer = $body.find('.slider-container').hide();
    $body.find('.btn').click(function ()
    {
        if ($(this).find('input').attr('name') === 'anytime')
        {
             $sliderContainer.hide();
        }
        else
        {
            $sliderContainer.show();
        }
    });

    var $cost = $body.find('.estimated-cost');
    $slider.slider({
        step: 0.5,
        value: 24,
        ticks: [0, 6, 12, 18, 24],
        ticks_positions: [0, 25, 50, 75, 100],
        ticks_labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        tooltip: 'hide',
        formatter: function(value) {
            var pickupTime = Math.floor(value).toString() + ":" + (value % 1 ? "30" : "00");
		    return 'Earliest Pickup Time: ' + pickupTime;
	    },
    }).on('slide', function (ev) {
        var value = ev.value;
        var pickupTime = Math.floor(value).toString() + ":" + (value % 1 ? "30" : "00");
	    $body.find('.slider-display .inner').text(pickupTime);
        var cost = 10 + (24 - value) * 0.5;
        $cost.text('$' + cost);
    });
}