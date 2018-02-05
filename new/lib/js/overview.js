$(function(){
  var
    repknowledge = $(".repknowledge"),
    funindependent = $(".funindependent");

    repknowledge.mouseover(function() {
      funindependent.removeClass("active").find(".imagebox").addClass("passive");
      repknowledge.addClass("active").find(".imagebox").removeClass("passive");
    })

    funindependent.mouseover(function() {
      repknowledge.removeClass("active").find(".imagebox").addClass("passive");
      funindependent.addClass("active").find(".imagebox").removeClass("passive");
    })

    $(".imagebox").addClass("passive")
})
