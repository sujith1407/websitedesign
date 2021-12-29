/*===== SHOW MENU =====*/

const showMenu = (toggleId, navId)=>{
    const toggle=document.getElementById(toggleId),
    nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        }) 
    }
}
showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionTop = current.offsetTop - 50
        

    })
}

/*===== CHANGE BACKGROUND HEADER =====*/ 


/*===== SHOW SCROLL TOP =====*/ 


/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 


