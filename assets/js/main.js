const ul = document.querySelector('nav ul');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        
    }else{
        ul.classList.add('open');
    }
}

document.onload = () => {
    console.log('hello world');
};