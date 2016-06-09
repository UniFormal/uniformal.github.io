/* sets event handler for expanding menu */
$(function(){
  $('.menu li li li').hide();
  var path = location.pathname;
  $('.menu li').each(function(i,x) {
    var li = $(x);
    if (path.startsWith(li.children('a').attr('href'))) {
       li.addClass('current-section');
       li.children('ul').children('li').show();
    } else {
       li.removeClass('current-section');
    }
  })
});