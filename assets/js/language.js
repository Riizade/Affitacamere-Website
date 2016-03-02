function getCurrentLanguage() {
  var curPath = window.location.href.split('/')[5];
  return curPath;
}

$('document').ready(function(){ // on page load
  var language = getCurrentLanguage(); // get the current language from the URL
  $("#hidden").load("../assets/strings.html", function() { // load strings.html into the hidden attribute
    $(".string." + language).each(function(index) { // for each string class element with the current language as one of its other classes
      var classes = $(this).attr('class').split(/\s+/); // get the element's classes
      stringElement = this; // keep track of the element object when "this" changes context
      for (i = 0; i < classes.length; i++) { // for each of the element's classes
        if (classes[i] != language && classes[i] != "string") { // if the class is not the one used to select it, or string (meaning: the string-[identifier] class)
          $("." + classes[i] + ":not(.string)").each(function(index) { // for each non-string element sharing the class
            $(this).text($(stringElement).text()); // replace the text with the text from the string element
          })
        }
      }
    })
  });
});
