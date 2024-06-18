
var n = document.querySelectorAll(".drum").length;

for (var i=0; i<n; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
    });
};



var sound=  new Audio ("./sounds/tom-1.mp3");
sound.play();

function HouseKeeper (yearsOfExp, name, age, types ){
    this.yearsOfExp= yearsOfExp;
    this.name= name;
    this.age = age;
    this.types= types;
}

var hh1 = new HouseKeeper (12, "jamie", 25, ['room','table']);


console.log(hh1);
console.log(hh1.name);