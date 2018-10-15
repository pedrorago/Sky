$(function(){

	var data = new Date()
	var hourMinute;

	var satellite = $(".satellite");

	TweenMax.to(satellite,25, {
	  bezier: {
		autoRotate: 45,
		type: "soft", 
		curviness: 3,
		values: [
		  {left: -100, top: 100},
		  {left: 100, top: 100},
		  {left: 300, top: 250},
		  {left: 500, top: 100},
		  {left: 700, top: 250},
		  {left: 900, top: 100},
		  {left: 1200, top: 250},
		  {left: 1600, top: 100},
		  {left: 2000, top: 250},
		  {left: 2300, top: 100},
		  {left: 2500, top: 250},
		  {left: 2800, top: 100},
		]
	  },
	  ease: Linear.easeNone,
	  repeat: -1
	});


	var morning = $(".morning").val();
	var night = $(".night").val();

	$(".change").on('click', function()
	{
		var morningView = $(".morning").val();
		var nightView = $(".night").val();

		morning = morningView;
		night = nightView;
		
	});

	function verifyClock(hours,minutes){

		if(hours >= morning && hours < night){
			inDay();
		}else
		{
			inNight();
		}
	}


	function inNight()
	{
		$(".content").css('background-color','#091318');
		$(".gradient1").addClass('gradient3');
		$(".gradient2").css('display', 'none');
		$(".balao").css('opacity', '0');
		$(".balao").css('display', 'none');
		$(".aviao").css('opacity', '0');
		$(".aviao").css('display', 'none');
		$(".bus").css('display', 'block');
		$(".bus").css('opacity', '1');
		$(".estrelas").css('opacity', '0.3');
		$(".Moon").css('display', 'flex');
		$(".Moon").css('visibility', 'visible');
		$(".Moon").css('opacity', '1');
		$(".satellite").css('opacity', '1');
	}
	function inDay()
	{
		$(".content").css('background-color','#027aaa');
		$(".gradient1").removeClass('gradient3');
		$(".gradient2").css('display', 'block');
		$(".balao").css('opacity', '1');
		$(".balao").css('display', 'block');
		$(".aviao").css('opacity', '1');
		$(".aviao").css('display', 'block');
		$(".bus").css('display', 'none');
		$(".bus").css('opacity', '0');
		$(".estrelas").css('opacity', '1');
		$(".Moon").css('display', 'none');
		$(".Moon").css('visibility', 'hidden');
		$(".Moon").css('opacity', '0');
		$(".satellite").css('opacity', '0');
	}
	function printHourMinute(){
		data = new Date()
		console.log(data.getHours()+" : "+data.getMinutes())
		verifyClock(data.getHours(),data.getMinutes())
	}

	function clock() {
		intervalClock = setInterval(printHourMinute,1000);
	}

	clock();

	var aviao1 = $(".aviao1");
	var aviao2 = $(".aviao2");

	function mudaAviao(aviao)
	{

		setInterval(function(){
			var valores = [
			'5%',
			'8%'
			];

			for (var i = 0; i <= valores.length; i++) 
			{
				aviao.css('max-width', valores[Math.floor(Math.random()*valores.length)]);
			}

		},12000);

	}

	mudaAviao(aviao1);
	mudaAviao(aviao2);
});
