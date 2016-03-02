function getCurrentLanguage() {
  var curPath = window.location.href.split('/')[5];
  return curPath;
}

$('document').ready(function(){ // on page load
  var language = getCurrentLanguage(); // get the current language from the URL
  $("#hidden").load("../assets/strings.html", function() { // load strings.html into the hidden attribute
    $(".has-string").each(function(index) { // for each string class element with the current language as one of its other classes
      var classes = $(this).attr('class').split(/\s+/); // get the element's classes
      stringElement = this; // keep track of the element object when "this" changes context
      for (i = 0; i < classes.length; i++) { // for each of the element's classes
        if (/^string-/.test(classes[i])) { // if the class begins with string-
          $(this).text(strings[classes[i]][language]); // replace the text with the corresponding string from the strings object
        }
      }
    })
  });
});
