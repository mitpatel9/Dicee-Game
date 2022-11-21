let play1=Math.floor(Math.random()*6)+1;
let play2=Math.floor(Math.random()*6)+1;
console.log(play1,play2)

let img1="/img/dice"+play1+".png";
let img2="/img/dice"+play2+".png";

let c1img=document.querySelectorAll('img')[0];
c1img.setAttribute("src",img1)
let c2img=document.querySelectorAll('img')[1];
c2img.setAttribute("src",img2)


if(play1>play2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(play1<play2){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "🚩 Draw!";
}