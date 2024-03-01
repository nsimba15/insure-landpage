

let icon_hambur = document.querySelector('.icon_hambur')
let menu = document.querySelector('.menu')

let bool = true

icon_hambur.addEventListener('click', ()=>{
  
  if(bool == true){
    bool = false
    document.querySelector('.nav_bar').style.right = 0
    icon_hambur.src = 'images/icon-close.svg'
    
  }else{
    bool = true
    icon_hambur.src = 'images/icon-hamburger.svg'
    document.querySelector('.nav_bar').style.right  = '-100%'

  }

  console.log(bool);

})