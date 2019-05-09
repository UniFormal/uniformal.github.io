$(function(){
    // the base url to api documentation, with a trailing slash
    var APIDOC_BASE_URL = "https://uniformal.github.io/apidoc/"

    // find all the links that start with apidoc://
    var apilinks = $("a[href^='apidoc://']");
    if (apilinks.length == 0) {
        return
    }

    /**
     * 
     * @param {string} uri 
     */
    var replaceLink = function(uri){
        var PACKAGE_INDEX = window.Index.PACKAGES;

        // if we have the uri, then link to the package itself
        if (PACKAGE_INDEX.hasOwnProperty(uri)) {
            return uri.replace(/\./g, "/") + "/index.html";
        }

        // if not, then we split off the last '.' and search in that package
        var index = uri.lastIndexOf(".")
        var packageName = uri.substring(0, index);
        
        if (!PACKAGE_INDEX.hasOwnProperty(packageName)) {
            console.warn("Can not find package: '" + packageName + "' missing from package index. ");
            return '?search='+ uri;
        }

        // find the object in the index
        var packageObject = PACKAGE_INDEX[packageName];
        var indexObject = packageObject.find(function(e){ return e["name"] === uri});
        if (!indexObject) {
            console.warn("Can not find object: '" + uri + "' missing from package '" + packageName + "'. ");
            return '?search='+ uri;
        }

        // and find the url
        var url = indexObject[indexObject['kind']];
        if (!url) {
            console.warn("Can not find property: '" + uri + "' is missing valid package. ");
            return '?search='+ uri;
        }
        
        return url;
    }

    // load the package index
    window.Index = {};
    $.getScript(APIDOC_BASE_URL+"index.js", function(){

        // and replace all the htmls
        apilinks.each(function(){
            var me = $(this);
            var uri = me.attr("href").substring("apidoc://".length);
            me.attr("href", APIDOC_BASE_URL+replaceLink(uri));
        });
    });
})
