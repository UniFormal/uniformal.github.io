/* sets event handler for expanding menu */
$(function(){
  $('.menu li li li').hide();
  $('.menu li').click(function(){
    $(this).children('ul').children('li').show();
  })
});