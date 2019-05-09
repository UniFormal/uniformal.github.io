$(function(){
    // add the table class to tables
    $("table").addClass("table table-striped")

    // setup all the detail spans -- a button with an expansion event. 
    $(".detail").each(function(){
        var me = $(this);
        var id = "detail_" + Math.random().toString();

        var collapsable = $("<div>").addClass("collapse").attr("id", id).append(
            $("<div>").addClass("card card-body").html(me.html())
        )

        var button = $("<button>").attr({
            'class': 'btn btn-outline-info btn-sm', 
            'type': 'button', 
            'data-toggle': 'collapse', 
            'data-target': '#'+id, 
            'aria-controls': id, 
            'aria-expanded': false
        }).text("Note");

        me.replaceWith(button);
        button.parent().append(collapsable);
    });
});

/** adding links to each item, see http://blog.parkermoore.de/2014/08/01/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/ */
var anchorForId = function (id) {
    var anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.href      = "#" + id;
    anchor.innerHTML = "<i class=\"fa fa-link\"></i>";
    return anchor;
  };
  
  var linkifyAnchors = function (level, containingElement) {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
      var header = headers[h];
  
      if (typeof header.id !== "undefined" && header.id !== "") {
        header.appendChild(anchorForId(header.id));
      }
    }
  };
  
  document.onreadystatechange = function () {
    if (this.readyState === "complete") {
      var contentBlock = document.getElementsByClassName("content")[0];
      if (!contentBlock) {
        return;
      }
      for (var level = 1; level <= 6; level++) {
        linkifyAnchors(level, contentBlock);
      }
    }
  };