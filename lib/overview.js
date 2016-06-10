/* sets event handler for hovering on a feature */
$(function(){
  $('.diagram *[data-id]').hover(function(){
    $(this).addClass("selected");
    showDetails($(this).attr('data-id'));
  }, function(){
    $(this).removeClass("selected");
    showDetails('default');
  })

  $(".area").hover(focusAreas);
  $(".aspect").hover(focusAspects);
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

function focusAreas() {
  $(".aspect").removeClass('active').addClass('passive');
  $(".area").removeClass('passive').addClass('active');
}

function focusAspects() {
  $(".area").removeClass('active').addClass('passive');
  $(".aspect").removeClass('passive').addClass('active');
}
