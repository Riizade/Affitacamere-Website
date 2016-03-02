About
------
This is a website written for my sister's Bed and Breakfast in Levanto, Italy.
This project can be used as a template for other sites that have similar requirements. (It's MIT Licensed!)
This project uses Bootstrap so that the web pages display on any device, and becaue I'm a terrible designer.
This project is entirely made of static pages so that it can be hosted on literally anything, even Dropbox.
This project supports a somewhat clean method of handling multiple languages by loading string resources on the client side.
This project uses NO cookies whatsoever.
This project will use a client-side javascript templating engine to manage building views from page fragments.

Language Specification
------
The language is selected via the language drop-down box.
Strings in strings.html have two classes. One class is the language the string is written in, identified by its two-letter language code. The other class is the string identifier, in the format "string-[name]"
Strings in strings.html will be placed into attributes that share their identifier class, according to the language specified by the URL of the page

Todo
------
- Source actual images
- Use Handlebars.js, Mustache.js, or Dust.js client-side templating engine. Look into jsRender.
- Look into using the templating engine to handle language switching.
- Get scrollspy working
