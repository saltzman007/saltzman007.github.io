(function($){

	var $images = $('#images li');
	var $title = $('#site-name');

	var timer = subTimer = null;
	var numImages = $images.length
	var current = Math.floor(Math.random()*numImages);
	var INTERVAL = 5000;


	var title = $title.text();
	var typo_delay = [
		30, // 1 H
		30, // 2 a
		14, // 3 r
		 2, // 4 r
		 8, // 5 y
		 4, // 6 
		 30, // 7 S
		15, // 8 a
		12, // 9 l
		30, //10 t
		 9, //11 z
		20, //12 m
		50, //13 a
		17, //14 n
		10  
	]

	$title.html('');
	//$.each(title.replace(/[\t\s]/g,'').split(''),function(i,c){
	$.each(title.split(''),function(i,c){
		//var $s = $('<span class="c'+(i+1)+'">'+c+'</span>');
		var $s = $('<span class="c'+(i+1)+'">'+c+'</span>');
		var d = typo_delay[i]
		$s.css(Modernizr.prefixedCSS('transition-delay'), (d/30)*1000+'ms')
		$title.append($s);
	});


	$images.each(function(){
		var $img = $(this).find('img');
		$(this).css({
			'background-image' : 'url('+$img.attr('src')+')'
		});
		$img.css('display','none');
	});

	function start(){
		timer = setTimeout(function(){
			var old = current;
			$images.eq(old).addClass('hide');
			subTimer = setTimeout(function(){
				$images.eq(old).removeClass('current hide');
			},2200)
			current = getRandomNext();
			$images.eq(current).addClass('current');

			start();

		}, INTERVAL);
	}

	function stop(){
		clearTimeout(timer);
		clearTimeout(subTimer);
	}

	function getRandomNext(){
		var n = Math.floor(Math.random()*numImages);
		if(n==current){
			while(n==current){
				n = Math.floor(Math.random()*numImages);
			}
		}
		return n;
	}


	function addEvents(){
		$('#scroll-info a').on('click.index',function(e){
			$(document).off('mousewheel.index touchmove.index');
			stop();
		})

		$(document).on('mousewheel.index touchmove.index', function(e){
			$(document).off('mousewheel.index touchmove.index');
			bq.page.show($('#scroll-info a').attr('href'));
		});
	}

	function removeEvents(){
		$('#scroll-info a').off('click.index');
		$(document).off('mousewheel.index touchmove.index');
	}

	var init_timers = []
	$(window).one('enter.page.bq', function(){

		init_timers[init_timers.length] = setTimeout(function(){
			$title.addClass('show');
		}, 0);

		init_timers[init_timers.length] = setTimeout(function(){
			$images.eq(current).addClass('current');
			start();
		}, 800);

		init_timers[init_timers.length] = setTimeout(function(){
			$('#scroll-info').addClass('show');
		}, 1300);

		init_timers[init_timers.length] = setTimeout(addEvents, 2000);
	}).one('exit.page.bq', function(){
		removeEvents();
		stop();
		for (var i = init_timers.length - 1; i >= 0; i--) {
			clearTimeout(init_timers[i]);
		}
	})



})(jQuery)