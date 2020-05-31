var controller = new ScrollMagic.Controller();

// create a scene

const scrollMagicControler = (when, what, toggle ="show", reverse=false) => {
    new ScrollMagic.Scene({
        triggerElement: when,
        reverse: reverse
    }).setClassToggle(what, toggle).addTo(controller);
}

scrollMagicControler("#omne", ".nadpis1");
scrollMagicControler("#projekty", ".nadpis2");
scrollMagicControler("#kontakt", ".nadpis3");
scrollMagicControler("#omne", ".skills");
scrollMagicControler("#omne", ".omne-wrapper");
scrollMagicControler("#projekty", ".one");
scrollMagicControler("#projekty", ".two");
scrollMagicControler("#projekty", ".three");
scrollMagicControler("#projekty", ".four");
scrollMagicControler("#projekty", ".five");
scrollMagicControler("#projekty", ".six");
scrollMagicControler("#projekty", ".seven");
scrollMagicControler("#projekty", ".five");
scrollMagicControler(".wrapper", ".nav", "color", true);
scrollMagicControler(".wrapper", ".mobile", "color", true);



//------START MOBILE

const button = document.querySelectorAll(".button");
let show, show2, show3, show4, show5, show6, show7;
show = true;
show2 = true;
show3 = true;
show4 = true;
show5 = true;
show6 = true;
show7 = true;

const showMobileBG = (btn, project, show) => {
    btn.addEventListener("click", () => {
        if(show){
            document.querySelector(`.${project}`).style.background = 'black';
            show = !show;
        }
        else{
            document.querySelector(`.${project}`).style.background = `url("./img/${project}.png") top`;
            document.querySelector(`.${project}`).style.backgroundSize = 'cover';
            show = !show;
        }
    });
}

showMobileBG(button[0], "covid", show );
showMobileBG(button[1], "space", show2 );
showMobileBG(button[2], "elearning", show3 );
showMobileBG(button[3], "cyber", show4 );
showMobileBG(button[4], "mpower", show5 );
showMobileBG(button[5], "odmamicky", show6 );
showMobileBG(button[6], "msports", show7 );




const mobileMenuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navItem = document.querySelectorAll(".nav-link")

navItem.forEach( item => {
    item.addEventListener("click", () =>{
        mobileMenu.style.opacity = "0";
        mobileMenuBtn.style.transform = "rotateY(0deg)";
        for(let i = 0; i < mobileMenuBtn.children.length; i++){
            mobileMenuBtn.children[i].style.background = "#fff";
        }
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
        morph.play();
        mobileMenu.style.display = "flex";
        mobileMenuBtn.style.transform = "rotateY(180deg)";
        for(let i = 0; i < mobileMenuBtn.children.length; i++){
            mobileMenuBtn.children[i].style.background = "rgb(252, 206, 0)";
        }
        document.body.style.overflowY = "hidden";
        setTimeout(() => {
            mobileMenu.style.opacity = "1";
        }, 0); 
        showMenu = !showMenu;
    }
    else{
        mobileMenu.style.opacity = "0";
        mobileMenuBtn.style.transform = "rotateY(0deg)";
        mobileMenuBtn.style.color = "#fff";
        for(let i = 0; i < mobileMenuBtn.children.length; i++){
            mobileMenuBtn.children[i].style.background = "#fff";
        }
        setTimeout(() => {
            morph.pause();
            mobileMenu.style.display = "none";
            document.body.style.overflowY = "auto";
        }, 300); 
        showMenu = !showMenu;
    }

})

const copyEmail = () => {
    document.querySelector(".copy").addEventListener("click", () =>{
        let email = document.querySelector(".email");
        email.select();
        email.setSelectionRange(0, 99999);
        document.execCommand("copy");
        let hlaska = document.querySelector(".hlaska");
        hlaska.style.display = "block";
        setTimeout(() => {
            hlaska.style.opacity = "1"; 
        }, 0);
        setTimeout(() => {
            hlaska.style.opacity = "0";
            setTimeout(() => {
                hlaska.style.display = "none"; 
            }, 2500);
        }, 2000);
    })
}
copyEmail();


//anime.js

var morph = anime({
    targets: ".morph",
    d: [
        {value: "M0,256L0,128L36.9,128L36.9,192L73.8,192L73.8,96L110.8,96L110.8,160L147.7,160L147.7,32L184.6,32L184.6,160L221.5,160L221.5,320L258.5,320L258.5,64L295.4,64L295.4,256L332.3,256L332.3,224L369.2,224L369.2,256L406.2,256L406.2,288L443.1,288L443.1,192L480,192L480,64L516.9,64L516.9,192L553.8,192L553.8,320L590.8,320L590.8,64L627.7,64L627.7,256L664.6,256L664.6,288L701.5,288L701.5,64L738.5,64L738.5,192L775.4,192L775.4,64L812.3,64L812.3,0L849.2,0L849.2,160L886.2,160L886.2,288L923.1,288L923.1,64L960,64L960,96L996.9,96L996.9,224L1033.8,224L1033.8,128L1070.8,128L1070.8,160L1107.7,160L1107.7,128L1144.6,128L1144.6,64L1181.5,64L1181.5,64L1218.5,64L1218.5,32L1255.4,32L1255.4,32L1292.3,32L1292.3,160L1329.2,160L1329.2,96L1366.2,96L1366.2,160L1403.1,160L1403.1,288L1440,288L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"},
        {value: "M0,192L0,96L36.9,96L36.9,160L73.8,160L73.8,64L110.8,64L110.8,288L147.7,288L147.7,224L184.6,224L184.6,192L221.5,192L221.5,192L258.5,192L258.5,0L295.4,0L295.4,288L332.3,288L332.3,96L369.2,96L369.2,32L406.2,32L406.2,256L443.1,256L443.1,32L480,32L480,192L516.9,192L516.9,128L553.8,128L553.8,32L590.8,32L590.8,128L627.7,128L627.7,160L664.6,160L664.6,288L701.5,288L701.5,96L738.5,96L738.5,224L775.4,224L775.4,128L812.3,128L812.3,160L849.2,160L849.2,288L886.2,288L886.2,160L923.1,160L923.1,224L960,224L960,160L996.9,160L996.9,64L1033.8,64L1033.8,224L1070.8,224L1070.8,224L1107.7,224L1107.7,160L1144.6,160L1144.6,32L1181.5,32L1181.5,192L1218.5,192L1218.5,224L1255.4,224L1255.4,32L1292.3,32L1292.3,96L1329.2,96L1329.2,288L1366.2,288L1366.2,320L1403.1,320L1403.1,128L1440,128L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"},
        {value: "M0,256L0,128L36.9,128L36.9,192L73.8,192L73.8,96L110.8,96L110.8,160L147.7,160L147.7,32L184.6,32L184.6,160L221.5,160L221.5,320L258.5,320L258.5,64L295.4,64L295.4,256L332.3,256L332.3,224L369.2,224L369.2,256L406.2,256L406.2,288L443.1,288L443.1,192L480,192L480,64L516.9,64L516.9,192L553.8,192L553.8,320L590.8,320L590.8,64L627.7,64L627.7,256L664.6,256L664.6,288L701.5,288L701.5,64L738.5,64L738.5,192L775.4,192L775.4,64L812.3,64L812.3,0L849.2,0L849.2,160L886.2,160L886.2,288L923.1,288L923.1,64L960,64L960,96L996.9,96L996.9,224L1033.8,224L1033.8,128L1070.8,128L1070.8,160L1107.7,160L1107.7,128L1144.6,128L1144.6,64L1181.5,64L1181.5,64L1218.5,64L1218.5,32L1255.4,32L1255.4,32L1292.3,32L1292.3,160L1329.2,160L1329.2,96L1366.2,96L1366.2,160L1403.1,160L1403.1,288L1440,288L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"}
    ],
    easing: "easeInOutQuint",
    duration: 5000,
    autoplay: true,
    loop: true
});
morph.pause();




