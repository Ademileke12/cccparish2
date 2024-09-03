function swap(){
    document.getElementById("im").style.backgroundImage = "url('./images/image_123650291.JPG')";
    document.getElementById("in").style.display = "none";
    document.getElementById("im").style.display = "block";  
}

function swap2(){
    document.getElementById("in").style.backgroundImage = "url('./images/image_123650291(1).JPG')";
    document.getElementById("im").style.display = "none";
    document.getElementById("in").style.display = "block";  
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}