Todo
------
- Make language selector functional
  - URL has the format www.site.tld/en/index.html
  - Javascript in the selector just requests the new page
  - The page is built by using JavaScript to grab the language from the URL and grabbing the various text blocks from a central file
- Source actual images


Language Specification
------
The language is selected via the language drop-down box.
Strings in strings.html have two classes. One class is the language the string is written in, identified by its two-letter language code. The other class is the string identifier, in the format "string-[name]"
Strings in strings.html will be placed into attributes that share their identifier class, according to the language specified by the URL of the page
