/**
 * 
 */

	document.getElementById('left').style.height = (document.getElementById('right').clientHeight) +'px';
	
	new ResizeSensor(jQuery('#right'), function(){ 
		document.getElementById('left').style.height = (document.getElementById('right').clientHeight) +'px';
	});
	
 
 