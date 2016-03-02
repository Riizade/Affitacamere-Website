function getCurrentLanguage() {
  var curPath = window.location.href.split('/')[4];
  console.log(curPath);
  return curPath;
}


$('document').ready(function(){ // on page load
  console.log("Testing!");
  var language = getCurrentLanguage(); // get the current language from the URL
  $("#hidden").load("strings.html"); // load strings.html into the hidden attribute
  console.log($("#hidden"));

  $(".string." + language).each(function(index) { // for each string class element with the current language as one of its other classes
    console.log("string " + index + ": " + this.text());
    var classes = this.attr('class').split(/\s+/); // get the element's classes
    stringElement = this; // keep track of the element object when "this" changes context
    for (i = 0; i < classes.length; i++) { // for each of the element's classes
      if (classes[i] != language && classes[i] != "string") { // if the class is not the one used to select it, or string (meaning: the string-[identifier] class)
        $("." + classes[i] + " :not(string)").each(function(index) { // for each non-string element sharing the class
          this.text = stringElement.text; // replace the text with the text from the string element
        })
      }
    }
  })
});
