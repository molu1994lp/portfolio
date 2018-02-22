


function changeCard(event){
	var active = document.querySelector('.activated');
	if(active != null || active != undefined){
		active.classList.remove('activated');
		active.classList.add('hidden');
	}
	
	switch(event.target.value){
	case '1' :{
		document.getElementById('card1').classList.remove('hidden');
		document.getElementById('card1').classList.add('activated');
		return '#card1';
		break;
	}
	case '2' :{
		document.getElementById('card2').classList.remove('hidden');
		document.getElementById('card2').classList.add('activated');
		return '#card2';
		break;
		
	}
	case '3' :{
		document.getElementById('card3').classList.remove('hidden');
		document.getElementById('card3').classList.add('activated');
		return '#card3';
		break;
		
	}
	case '4' :{
		document.getElementById('card4').classList.remove('hidden');
		document.getElementById('card4').classList.add('activated');
		return '#card4';
		break;
		
	}
	case '5' :{
		document.getElementById('card5').classList.remove('hidden');
		document.getElementById('card5').classList.add('activated');
		return '#card5';
		break;
		
	}
	case '6' :{
		document.getElementById('card6').classList.remove('hidden');
		document.getElementById('card6').classList.add('activated');
		return '#card6';
		break;
		
	}
	case '8' :{
		document.getElementById('form').classList.remove('hidden');
		document.getElementById('form').classList.add('activated');
		return '#form';
		break;
		
	}
	}
	
}
/*//Ustawia jednakowa wysokosc dla dwoch diwow
$( document ).ready(function() {
    $('.colored-left').height($('.right').height());
});*/

