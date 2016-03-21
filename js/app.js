// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

//This adds to jquery to be able to add sound bites
  $.extend({
   playSound: function(){
     return $(
       '<audio autoplay="autoplay" style="display:none;">' +
        '<source src="' + arguments[0] + '.mp3" />' +
        '<source src="' + arguments[0] + '.ogg" />' +
        '<embed src="' + arguments[0] + '.mp3" hidden="true" autostart="true" loop="false" class="playSound" />' +
        '</audio>'
     ).appendTo('body');
   }
 });

  var turn = 0;

    $('.box').on('click',
      function whosGonnaPlay(event){
        if(($(this).text() !== "X") && ($(this).text() !== "O")){
          if(turn % 2 === 0){
            //had to keep unwanted text for now
            $(this).text("X");
            $(this).prepend('<img src="https://media.giphy.com/media/qSVMNkreyWbza/giphy.gif"/>');
            $('.whosTurn').text('Go OOOO!!!');
            turn ++;
            $.playSound('http://www.thesoundarchive.com/starwars/swvader02');
          }else{
            //had to keep unwanted text for now
            $(this).text("O");
            $(this).prepend('<img src="https://media.giphy.com/media/fL8x5Zjbiw2VG/giphy.gif"/>');
            $.playSound('http://www.thesoundarchive.com/starwars/dange-disturb');
            $('.whosTurn').text('Go X!');
            turn ++;
          }
        }
        isWinner();

        //ran out of time to get the 'draw' function to work
        //if (turn === 8){
        //  $('.whosTurn').text('Draw');
        //}
    });

    //I was going to count rounds and reset game seperately
  $('#boardReset').on('click',
    function LetsTryEmAgain(event){
      $('.box').text('');
      $('.whosTurn').text('Go X!');
      $('.Xwins').text('');
      $('.Owins').text('');
      turn = 0;
  });

  $('#gameReset').on('click',
    function relaodPage(event){
      window.location.reload();
    });

//this is to check winner, I'm definitely sure there's an easier way
  var ticTacToeBoard = $('.box');
  function isWinner() {
    if($(ticTacToeBoard).eq(0).text() === 'X' &&
       $(ticTacToeBoard).eq(1).text() === 'X' &&
       $(ticTacToeBoard).eq(2).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(3).text() === 'X' &&
             $(ticTacToeBoard).eq(4).text() === 'X' &&
             $(ticTacToeBoard).eq(5).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(6).text() === 'X' &&
             $(ticTacToeBoard).eq(7).text() === 'X' &&
             $(ticTacToeBoard).eq(8).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(0).text() === 'X' &&
             $(ticTacToeBoard).eq(3).text() === 'X' &&
             $(ticTacToeBoard).eq(6).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(1).text() === 'X' &&
             $(ticTacToeBoard).eq(4).text() === 'X' &&
             $(ticTacToeBoard).eq(7).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(2).text() === 'X' &&
             $(ticTacToeBoard).eq(5).text() === 'X' &&
             $(ticTacToeBoard).eq(8).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(0).text() === 'X' &&
             $(ticTacToeBoard).eq(4).text() === 'X' &&
             $(ticTacToeBoard).eq(8).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(2).text() === 'X' &&
             $(ticTacToeBoard).eq(4).text() === 'X' &&
             $(ticTacToeBoard).eq(6).text() === 'X'){
        return $('.Xwins').text("X wins");
    }else if($(ticTacToeBoard).eq(0).text() === 'O' &&
             $(ticTacToeBoard).eq(1).text() === 'O' &&
             $(ticTacToeBoard).eq(2).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(3).text() === 'O' &&
             $(ticTacToeBoard).eq(4).text() === 'O' &&
             $(ticTacToeBoard).eq(5).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(6).text() === 'O' &&
             $(ticTacToeBoard).eq(7).text() === 'O' &&
             $(ticTacToeBoard).eq(8).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(0).text() === 'O' &&
             $(ticTacToeBoard).eq(3).text() === 'O' &&
             $(ticTacToeBoard).eq(6).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(1).text() === 'O' &&
             $(ticTacToeBoard).eq(4).text() === 'O' &&
             $(ticTacToeBoard).eq(7).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(2).text() === 'O' &&
             $(ticTacToeBoard).eq(5).text() === 'O' &&
             $(ticTacToeBoard).eq(8).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(0).text() === 'O' &&
             $(ticTacToeBoard).eq(4).text() === 'O' &&
             $(ticTacToeBoard).eq(8).text() === 'O'){
        return $('.Owins').text("O wins");
    }else if($(ticTacToeBoard).eq(2).text() === 'O' &&
             $(ticTacToeBoard).eq(4).text() === 'O' &&
             $(ticTacToeBoard).eq(6).text() === 'O'){
        return $('.Owins').text("O wins");
    }
  }

});
