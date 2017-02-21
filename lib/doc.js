/* sets event handler for expanding menu */
$(function() {
    $('.menu li li li').hide(); // hide lower levels

    var lis = $('.menu li'); // all li's

    // add custom bullet with click handler to each li
    lis.prepend("<span class='bullet'>o");
    $('.bullet').click(function() {
        toggleExpanded($(this))
    });

    // mark li's that are in the current section
    var path = location.pathname;
    lis.each(function(i, x) {
        var li = $(x);
        var a = li.children('a');

        // find out if the current link is active
        // exact links are special, we skip over them
        var isActive;
        if(a.hasClass('exact')){
            isActive = path == a.attr('href') || path == a.attr('href')+'index.html'
        } else {
            isActive = path.startsWith(a.attr('href'));
        }

        if (isActive) {
            li.addClass('current-section');
            li.children('ul').children('li').show(); // show siblings of current sections
        } else {
            li.removeClass('current-section');
        }
    })
});

function toggleExpanded(elem) {
    elem.parent().children('ul').children('li').toggle();
};
