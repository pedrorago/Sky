$(function(){

	var data = new Date()
	var hourMinute;


	function verifyClock(hours,minutes){

		if(hours==13 && minutes==33){
			$(".content").css('background-color','#091318');
			$(".gradient1").addClass('gradient3');
			$(".gradient2").css('display', 'none');
		}
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
