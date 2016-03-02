function getCurrentLanguage() {
  var curPath = window.location.href.split('/')[5];
  return curPath;
}

$('document').ready(function(){ // on page load
  $("body").scrollspy({ target: '#navbar'});
  var language = getCurrentLanguage(); // get the current language from the URL
  $("#hidden").load("../assets/strings.html", function() { // load strings.html into the hidden attribute
    $(".has-string").each(function(index) { // for each string class element with the current language as one of its other classes
      var classes = $(this).attr('class').split(/\s+/); // get the element's classes
      stringElement = this; // keep track of the element object when "this" changes context
      for (i = 0; i < classes.length; i++) { // for each of the element's classes
        if (/^string-/.test(classes[i])) { // if the class begins with string-
          var text = ($(this).html());
          console.log(text);
          text = text.replace("     ", strings[classes[i]][language]); // create a string where STRING is replaced with the correct translated text
          console.log(text);
          $(this).html(text); // update the text in the DOM using the string that was created
        }
      }
    })
  });
});
