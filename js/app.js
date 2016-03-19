// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var turn = "x";
  $('.box').on('click',
    function whosGonnaPlay(event){
        for(i = 0; i < 9; i ++){
          if(($(this).text() !== "X") && ($(this).text() !== "O")){
            if(turn){
              $(this).text("X");
              turn = "";
            }else{
              $(this).text("O");
              turn = "x";
            }
          }
        }
  });

  $('button').on('click',
    function LetsTryEmAgain(event){
      $('.box').text('');
  });
});
