// ---------- NAVBAR ---------- //

const nav = document.querySelector(".navbar"),
    MenuIcon = document.querySelector(".menu i"),
    navlink = document.querySelector(".nav-links"),
    body = document.querySelector("body"),
    setting = document.querySelector(".setting"),
    settingBox = document.querySelector(".setting-ctn"),
    settingIcon = document.querySelector(".fa-gear"),
    sOverlay = document.querySelector(".setting-overlay");
let transform = navlink.style.transform;

function MenuBtn() {
    navlink.classList.toggle("goright");
    setting.classList.toggle("hidden");
    if (MenuIcon.classList.contains("fa-bars")) {
        return MenuIcon.classList.replace("fa-bars", "fa-xmark");
    }
    MenuIcon.classList.replace("fa-xmark", "fa-bars");
}

if (window.innerWidth <= 320 ){
    MenuIcon.classList.replace("fa-2xl", "fa-xl");
    settingIcon.classList.replace("fa-xl", "fa-lg");
}

if (window.innerWidth <= 240 ){
    MenuIcon.classList.replace("fa-xl", "fa-lg");
}



function openSetting(){
    settingBox.classList.toggle("showctn");
    sOverlay.classList.toggle("showctn");
}
function closeSetting(){
    settingBox.classList.remove("showctn");
    sOverlay.classList.remove("showctn");
}

$("#Slider").on("input",function () {
    $('#mainText').css("font-size", $(this).val()*18 + "px");
    $('#mainText').css("line-height", $(this).val()*28 + "px");
});

function darkMode(){
    var checkBox = document.getElementById("check");
    if (checkBox.checked == true) {
        $(':root').css('--text-c', '#ffffff');
        $(':root').css('--text-c-m', '#cccccc');
        $(':root').css('--text-c-s', '#aaaaaa');
        $(':root').css('--bg-c-m', 'linear-gradient(223deg, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 100%)');
        $(':root').css('--bg-c-t', '#292929');
        $(':root').css('--bd-c-1', '#2b2b2b');
        $(':root').css('--bd-c-2', '#444444');
        $(':root').css('--btn-c-1', '#272727');
        $(':root').css('--btn-c-a', '#232323');
        $(':root').css('--sd-c-1', 'rgba(0, 0, 0, 1)');
        $(':root').css('--sd-c-2', 'rgba(255, 255, 255, 0.2)');
        $(':root').css('--sd-c-h', 'rgba(0, 0, 0, 1)');
        $(':root').css('--btn-c-g', 'linear-gradient(60deg, rgb(24, 24, 24) 0%, rgb(54, 54, 54) 100%)');
    }
    else {
        $(':root').css('--text-c', '#000000');
        $(':root').css('--text-c-m', '#000000');
        $(':root').css('--text-c-s', '#494949');
        $(':root').css('--bg-c-m', 'linear-gradient(60deg, rgb(231, 231, 231) 0%, rgba(255,255,255,1) 100%)');
        $(':root').css('--bg-c-t', '#fafafa');
        $(':root').css('--bd-c-1', '#ececec');
        $(':root').css('--bd-c-2', '#bbbbbb');
        $(':root').css('--btn-c-1', '#ffffff');
        $(':root').css('--btn-c-a', '#ececec');
        $(':root').css('--sd-c-1', 'rgba(0, 0, 0, 0.2)');
        $(':root').css('--sd-c-2', 'rgba(255, 255, 255, 0.2');
        $(':root').css('--sd-c-h', 'rgba(0, 0, 0, 0.2)');
        $(':root').css('--btn-c-g', 'linear-gradient(60deg, rgb(231, 231, 231) 0%, rgba(255,255,255,1) 100%)');

    }
}



// ------------------------------ //

