var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#omne",
    reverse: false
}).setClassToggle(".nadpis1", "show").addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#projekty",
    offset: 100
}).setClassToggle("#projekty", "white").addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#projekty",
    reverse: false
}).setClassToggle(".nadpis2", "show") .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#kontakt",
    reverse: false
}).setClassToggle(".nadpis3", "show") .addTo(controller);  


new ScrollMagic.Scene({
    triggerElement: ".wrapper",
}).setClassToggle(".nav", "color") .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".wrapper",
}).setClassToggle(".mobile", "color") .addTo(controller); 


//------START MOBILE

const button = document.querySelectorAll(".button");
let show = true;
let show2 = true;
button[0].addEventListener("click", () => {
    if(show){
        document.querySelector(".covid").style.background = 'url("./img/covid.png") top';
        document.querySelector(".covid").style.backgroundSize = 'cover';
        show = !show;
    }
    else{
        document.querySelector(".covid").style.background = 'black';
        show = !show;
    }

})

button[1].addEventListener("click", () => {
    if(show2){
    document.querySelector(".space").style.background = 'url("./img/space-cowboys.png") top';
    document.querySelector(".space").style.backgroundSize = 'cover';
    show2 = !show2;
}
else{
    document.querySelector(".space").style.background = 'black';
    show2 = !show2;
}
})



const mobileMenuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navItem = document.querySelectorAll(".nav-link")

navItem.forEach( item => {
    item.addEventListener("click", () =>{
        mobileMenu.style.opacity = "0";
        setTimeout(() => {
            mobileMenu.style.display = "none";
            document.body.style.overflowY = "auto";
        }, 300); 
        showMenu = !showMenu;
    })
})

let showMenu = true;
mobileMenuBtn.addEventListener("click", () => {
    if(showMenu === true){
        mobileMenu.style.display = "flex";
        document.body.style.overflowY = "hidden";
        setTimeout(() => {
            mobileMenu.style.opacity = "1";
        }, 0); 
        showMenu = !showMenu;
    }
    else{
        mobileMenu.style.opacity = "0";
        setTimeout(() => {
            mobileMenu.style.display = "none";
            document.body.style.overflowY = "auto";
        }, 300); 
        showMenu = !showMenu;
    }

})



const boxMove = (number) => {
    for(let i =0; i< number; i++){
        document.querySelector(".boxes").innerHTML += "<div class='box'></div>"
    }

    const box = document.querySelectorAll(".box");
    box.forEach( box => {
        let randomleft = Math.random() * 95;
        let randomhight = Math.random() * 95;
        box.style.left = `${randomleft}%`
        box.style.top = `${randomhight}%`
    })
setInterval(() => {
    box.forEach( box => {
        let randomleft = Math.random() * 95;
        let randomhight = Math.random() * 95;
        box.style.left = `${randomleft}%`
        box.style.top = `${randomhight}%`
    })
}, 2000)

}
boxMove(100);
