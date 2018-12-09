$(window).on('load', function(){
	$('#nav-toggle').click(function(){
        $('#nav-toggle').toggleClass('active');
    });
    $('.header').slick({
    	autoplay: false,
    	speed: 700,
    	autoplaySpeed: 4000
    });
    $('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 7000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
	//Animated circle
    $('.num_box').easyPieChart({
        barColor: '#CC0000',
        lineWidth: 10,
        lineCap: 'circle',
        size: '220',
        scaleColor: false
    });
});