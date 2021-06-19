const mask = document.querySelector('[data-mask]');

// konstruktor funksiya


const PreLoader = function(mask) {
    this.mask = mask;
    this.init();
}

window.PreLoader = PreLoader;   

const fn = PreLoader.prototype;

fn.init = function() {
    window.addEventListener('load', ()=>{
        this.mask.classList.add('hide');
    })
}

if(mask){
    new PreLoader(mask);
}