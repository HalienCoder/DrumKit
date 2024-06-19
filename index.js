
var n = document.querySelectorAll(".drum").length;

for (var i=0; i<n; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (event){
        var buttonInnerHtml  = this.innerHTML;
       makesound(buttonInnerHtml);
       buttonAnim(buttonInnerHtml)
    });
};

document.addEventListener("keydown", function (event){
    makesound(event.key);
    buttonAnim(event.key);
})

function makesound(key){
    switch (key){
        case "w" :
            var sound=  new Audio ("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "a" :
            var sound=  new Audio ("./sounds/snare.mp3");
            sound.play();
            break;
        case "s" :
            var sound=  new Audio ("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "d" :
            var sound=  new Audio ("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "j" :
            var sound=  new Audio ("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "k" :
            var sound=  new Audio ("./sounds/tom-4.mp3");
            sound.play();
            break;
        case "l" :
            var sound=  new Audio ("./sounds/crash.mp3");
            sound.play();
            break;

    }
}

function HouseKeeper (yearsOfExp, name, age, types ){
    this.yearsOfExp= yearsOfExp;
    this.name= name;
    this.age = age;
    this.types= types;
    this.clean = function(){
        alert("cleaning in progress");
    }
}



function buttonAnim (currKey){
   var activeButton = document.querySelector("."+currKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}
var hh1 = new HouseKeeper (12, "jamie", 25, ['room','table']);
// hh1.clean();
