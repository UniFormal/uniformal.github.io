/* sets event handler for expanding menu */
$(function(){
  $('.menu li:before').click(function(){
    $(this).child('ul').child('li').toggle();
  })
});