function toggleMenu(){
    var nav = document.querySelector('nav');
    var navStyle = window.getComputedStyle(nav);
    var leftVal = navStyle.getPropertyValue('left');
    if(leftVal == "0px"){
        var pos = 0;
        var inter = setInterval(slideOutMenu, 3);
        function slideOutMenu(){
            if(pos > -480){
                pos = pos - 8;
                nav.style.left = pos + "px";
            }else{
                clearInterval(inter);
            }
        }
        //nav.style.left = "-35em";
    }else{
        var pos = -480;
        var inter = setInterval(slideInMenu, 3);
        function slideInMenu(){
            if(pos < 0){
                pos = pos + 8;
                nav.style.left = pos + "px";
            }else{
                clearInterval(inter);
            }
        }
        //nav.style.left = "0";
    }
}