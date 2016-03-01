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
Strings are stored in strings.html and named using their id attributes in the format id="string-[identifier]"
The classes of strings in strings.html represent the language the strings are written in, identified by their two-letter language code
Strings in strings.html will be placed into attributes that share their id, using the language specified by the URL of the page
