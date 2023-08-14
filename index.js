// var numberButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberButtons; i++) {
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//  var btnName = this.innerHTML;
//  sounds(btnName);
//  addAnimation(btnName);
// })  
// }

// document.addEventListener('keypress', function(event){
//  sounds(event.key);
//  addAnimation(event.key);
// })
function sounds(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;
   
    default:
      console.log('click the button');
      break;
   }
}
// function addAnimation(current){
//    var currentBtn =document.querySelector('.'+current);
//    currentBtn.classList.add('pressed');
//    setTimeout(function(){
//     currentBtn.classList.remove('pressed');
//    },100);
// }


// above code in JQuery
$('.drum').on('click',function(){
  sounds($(this).text());
  addAnimation($(this).text())
})
$('body').keypress(function(event){
  sounds(event.key);
  addAnimation(event.key)
})

function addAnimation(current){
  $('.'+current).addClass('pressed');
  setTimeout(function(){
    $('.'+current).removeClass('pressed');
  },100);
}