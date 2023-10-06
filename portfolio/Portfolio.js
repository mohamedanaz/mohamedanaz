// SHOW MENU
const showMenu = (toggleId , navId) =>{
    const toggle = document.getElementById(toggleId);
     var nav = document.getElementById(navId);
    
    if(toggle&& nav){
        toggle.addEventListener('click',()=>{
            nav.style.right='0px';
          
        })
    }
  
}
showMenu('nav_toggle','menu')


var icon = document.getElementById('i');
 const nav = document.getElementById('menu');
  if(nav && icon){
  icon.addEventListener('click',()=>{
    nav.style.right = '-380px';
})
  }


// const icon = document.getElementById('i');
// const nav = document.getElementById('menu');
// if(icon && nav){
//     icon.addEventListener('click',()=>{
//         nav.style.right = '-380px';
//     })
// }


// Active & Remove Active
// const navLink = document.querySelectorAll('link')
// navLink.forEach(n => n.classList.remove('active'))

// function linkAction(){
//     this.classList.add('active')

//     const navMenu = document.getElementById('menu')
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n=> n.addEventListener('click',linkAction))
