var colors=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];



$(document).keydown(function(){
  $("#level-title").text("Level 0");
  pattern();
  click();
});


function pattern(gameColor){
  var gameColor=colors[Math.floor(Math.random()*4)];
  gamePattern.push(gameColor);
  $("#"+gameColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio=new Audio("sounds/"+gameColor+".mp3");
  audio.play();
  console.log(gamePattern);
  // checking(gameColor);
}

function click(userChosenColor)
{
  $(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    var audio=new Audio("sounds/"+userChosenColor+".mp3");
    audio.play();
    console.log(userClickedPattern);
    // checking(userChosenColor);
  })

}


// function checking(colorValue)
// {
//   if(gamePattern[colorValue]===userClickedPattern[colorValue] && gamePattern.length===userClickedPattern.length)
//   {
//     console.log("success");
//   }
//   else
//   {
//     console.log("wrong");
//   }
// }
