const showmenu = document.querySelector('.menu-mobile')
const menu = document.querySelector('.ul-nav')

 showmenu.addEventListener('click', mostrarMenu)

function mostrarMenu(){
     menu.classList.toggle('display')
     menu.classList.add('abrirmenu')
    //  if(menu.style.display = 'none'){
    //     menu.style.display = 'flex'
    //  }
     
    //  if (menu.classList.contains('abrirmenu')){
    //     menu.classList.remove('abrirmenu')
    //     menu.classList.add('fecharmenu')
    //  }
}