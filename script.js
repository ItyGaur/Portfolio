AOS.init();

/* typing animation */

const text = [
"Web Developer",
"DSA Learner",
"AI Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);

}

type();


/* particles background */
particlesJS("particles-js", {

particles:{
number:{value:60},

color:{value:"#ffffff"},

opacity:{
value:0.2
},

size:{value:3},

move:{speed:1.5},

line_linked:{
enable:true,
opacity:0.5
}

}

});