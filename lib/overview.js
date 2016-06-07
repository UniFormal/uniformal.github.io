/* sets event handler for hovering on a feature */
$(function(){
  $('.diagram *[data-id]').hover(function(){
    $(this).addClass("selected-feature");
    showDetails($(this).attr('data-id'));
  }, function(){
    $(this).removeClass("selected-feature");
  })
});

function showDetails(id) {
   $('.details-container').children().each(function(i, child) {
     var c = $(child);
     if (c.attr('data-id') == id)
        c.show();
     else
        c.hide();
   })
}
   