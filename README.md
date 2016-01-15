A seed for vanilla es6 stuff! ◟(๑•͈ᴗ•͈)◞

Should be quick and easy. Nothing too fancy here.

###Getting started:

1. $ git clone [the thing]
2. $ npm install
3. $ npm start
4. $ npm run webpack-watch
5. go to http://localhost:1337/

###File Structure

Everything should be component based, so html, css, and js should be in the same folder.

* /src/client/
  * page.html - the page, should have all the bindings, and be driven by a global object
  * page.scss - the css for the page outside of components.
  * page.js - bootstrapper and point of truth for all logic for the page.
* /src/client/components - They should not know about eachother, they only have the global state passed in.
  * example.js
  * example.scss
  * app.js - global state and any global functions used by a bunch of components
