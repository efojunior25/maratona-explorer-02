'use strict';

const switcher = document.querySelector('.buttonRosa');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('pink')

    var className = document.body.className;
    if(className == "dark-blue"){
        this.textContent = "Tema Rosa";
    } else {
        this.textContent = "Tema Azul";
    }

    console.log('Nome da classe atual: ' + className);
});