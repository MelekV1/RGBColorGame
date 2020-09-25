var difficulte=6
var colors=[]
var squares=document.querySelectorAll(".square");
var picked_color;
var color_display=document.getElementById('display');
var message=document.getElementById("message");
var h1= document.querySelector('h1');
var resetbutton =document.getElementById('reset');
var modebtn =document.querySelectorAll('.modebtn');
init();
function init(){
  setupbutton();
  setupsquares();
  reset();
}
function setupsquares(){
  for (var i = 0 ; i < squares.length ; i++ ){
    squares[i].addEventListener("click",function(){
      var clicked = this.style.background;
      if (clicked === picked_color){
        message.textContent = ("Correct")
        resetbutton.textContent = "Play Again ?"
        changecolors(clicked)
        h1.style.background=clicked
      }else{
          this.style.background= "grey" ;
          message.textContent = ("Try Again")
      }
    });
  }
}
function setupbutton(){
  for (var i =0; i< modebtn.length ; i++ ){
    modebtn[i].addEventListener("click",function(){
      modebtn[0].classList.remove('selected');
      modebtn[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent=="Easy"? difficulte=3:difficulte=6
      // if (this.textContent ==="Easy"){difficulte=3;}else {difficulte=6;}
      reset()
    });
  }
}
function reset(){
  colors=rgb_generator(difficulte);
  picked_color=colorpicker();
  color_display.textContent=picked_color;
  resetbutton.textContent=('New Colors')
  message.textContent=('')
  for (var i = 0 ; i < squares.length ; i++ ){
    if (colors[i]){
      squares[i].style.display="block";
      squares[i].style.background=colors[i];
    }else {
      squares[i].style.display="none";
    }
  }
  h1.style.background = "turquoise";
}
resetbutton.addEventListener("click", function(){
  reset()
  });
function changecolors(color){
  for(var i=0 ; i<squares.length ; i++)
  squares[i].style.background=color;
}
function colorpicker(){
  var random=Math.floor(Math.random()*colors.length)
  return colors[random]
  }
function rgb_generator(num){
  var arr=[]

  for(var i =0 ; i<num ; i++){
    r=Math.floor(Math.random()*256)
    g=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    arr[i]="rgb("+ r + ", " + g + ", " + b + ")"

  }
  return arr

}
