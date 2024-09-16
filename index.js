let modal = document.querySelector('.modal');
let modalopen = document.querySelector('.modalopen');

let openbtn = document.querySelector('.openbtn'); 

openbtn.addEventListener('click',()=>{
modal.classList.add('modalopen')

})

let closenbtn = document.querySelector('.closebtn'); 

closenbtn.addEventListener('click',()=>{
modal.classList.remove('modalopen')

})