
document.querySelector("#Bouton-menu").addEventListener("click", menu);
    
function menu(){
    if(document.querySelector('#menu1').style.display == 'none'){
    document.querySelector('#menu1').style.display = 'block';
    document.querySelector('#menu2').style.display = 'block';
    document.querySelector('#menu3').style.display = 'block';
    document.querySelector('#menu4').style.display = 'block';
    document.querySelector('#menu5').style.display = 'block';
    }
    else{
    document.querySelector('#menu1').style.display = 'none';
    document.querySelector('#menu2').style.display = 'none';
    document.querySelector('#menu3').style.display = 'none';
    document.querySelector('#menu4').style.display = 'none';
    document.querySelector('#menu5').style.display = 'none';
    }

};

