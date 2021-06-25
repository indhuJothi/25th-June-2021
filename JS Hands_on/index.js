// var Color='purple';
let Color="purple";
document.querySelector('.left').style.backgroundColor=Color;
document.querySelector('.left .innertext').innerHTML=Color;
function changecolor()
{
    //Color='skyblue';
 let Color='skyblue';
document.querySelector('.right').style.backgroundColor=Color;
document.querySelector('.right .innertext').innerHTML=Color;
}
//changecolor();

document.querySelector('.right').style.backgroundColor=Color;
document.querySelector('.right .innertext').innerHTML=Color;
changecolor();
