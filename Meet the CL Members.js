const image = document.getElementById('menubar'); 

function displaymenu() {
    var div = document.getElementById("menulist"); 
    if(div.style.display === "none") {
        div.style.display = "block"
    }else{
        div.style.display = "none"; 
    }
}

function removemenu() {
    var div2 = document.getElementById("menulist"); 
    if(div2.style.display === "block") {
     div2.style.display = "none"
    }else {
        div2.style.display = "block"
    }
}

