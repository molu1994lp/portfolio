/**
 * 
 */

const listOfPicture =  document.querySelectorAll('.resp-gallery li');
const galleryButtonsDiv = document.querySelector('.gallery-buttons');

(function(){
    let circles = "";
    for(let i =0; i< listOfPicture.length; i++){
      circles += '<i class="fas fa-lg fa-circle" id="' + i + '" onclick="portfolioToggle(this.id)"></i>'; 
    }
    galleryButtonsDiv.innerHTML = circles;
    const icon = document.querySelectorAll('.fa-circle');
    icon.forEach(e => {
        e.style.margin = '0 20px';
        e.style.color = '#f2baca';
        e.style.cursor = 'pointer';
    });
    icon[0].style.color = '#7D2741';
})();

function portfolioToggle(id){
    let activePictur = document.querySelector('.gallery-active');
    const icon = document.querySelectorAll('.fa-circle');
    if(activePictur != null || activePictur != undefined){
        activePictur.classList.remove('gallery-active');
        activePictur.classList.add('hidden');
        icon.forEach(e => {e.style.color = '#f2baca';});
        listOfPicture[id].classList.remove('hidden');
        listOfPicture[id].classList.add('gallery-active');
        icon[id].style.color = '#7D2741';
    }
    
}
