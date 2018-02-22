


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
	case '7' :{
	    document.getElementById('gallery').classList.remove('hidden');
	    document.getElementById('gallery').classList.add('activated');
	    $('.slider').slider();
	    return '#gallery';
	    break;  
	    }
	}
}

function toContact(){
    var active = document.querySelector('.activated');
    if(active != null || active != undefined){
        active.classList.remove('activated');
        active.classList.add('hidden');
    }
    document.getElementById('form').classList.remove('hidden');
    document.getElementById('form').classList.add('activated');
    return '#form';
}

function openGit(){
    window.open('https://github.com/molu1994lp');
}

function openLinkedIn(){
    window.open('https://www.linkedin.com/in/piotr-mol-116585151/');
}
function openCodePen(){
    window.open('https://codepen.io/dashboard/');
}

function menuToggle(){
	const menuList = document.querySelector('.navi-mobile-list');
	if(menuList.classList.contains('clicked-menu')){
		let list = menuList.children;
		let i = list.length;
		let interval = setInterval(function(){
			i-- ;
			hideMenu(list[i]);
			if(i === 1){
				window.clearInterval(interval);
			}
		},50);
		menuList.classList.remove('clicked-menu');
	}
	else{
		menuList.classList.add('clicked-menu');
		let list = menuList.children;
		let i = 0;
		let interval = setInterval(function(){
			i++ ;
			showMenu(list[i]);
			if(i === list.length){
				window.clearInterval(interval);
			}
		}, 50);
	}
}

function hideMenu(item){
	$(item).fadeOut(50);
}

function showMenu(item){
	$(item).fadeIn(50);
}

(function hideOnInit(){
	menuToggle();
})();

