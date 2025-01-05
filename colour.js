var white_display = document.getElementById("white-color");
var green_display = document.getElementById("green-color");
var blue_display = document.getElementById("blue-color");
var red_display = document.getElementById("red-color");
var black_display = document.getElementById("black-color");
var yellow_display = document.getElementById("yellow-color");
var orange_display = document.getElementById("orange-color");
var pink_display = document.getElementById("pink-color");
var color_display = document.getElementsByClassName("color-pallette")[0];

var click = document.querySelectorAll(".button-click");
for(let i=0; i<click.length;i++){
    document.querySelectorAll(".button-click")[i].addEventListener("click",function(){ var color_click = this.textContent;
        color_collection(color_click);
        // console.log(click);
    })
};

function color_collection(key){
    switch(key){
        case"white":
        white_display.classList.toggle("color-print");
        color_display.style.color ="white";
        break;

        case"green":
        green_display.classList.toggle("color-print");
        color_display.style.color ="green";
        break;

        case"blue":
        blue_display.classList.toggle("color-print");
        color_display.style.color ="blue";
        break;

        case"red":
        red_display.classList.toggle("color-print");
        color_display.style.color ="red";
        break;

        case"black":
        black_display.classList.toggle("color-print");
        color_display.style.color ="black";
        break;
        
        
        case"yellow":
        yellow_display.classList.toggle("color-print");
        color_display.style.color ="yellow";
        break;


        case"orange":
        orange_display.classList.toggle("color-print");
        color_display.style.color ="orange";
        break;


        case"pink":
        pink_display.classList.toggle("color-print");
        color_display.style.color ="pink";
        break;


         default:
         break;

    }
};