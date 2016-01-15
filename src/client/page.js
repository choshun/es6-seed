require('./page.scss');

/**
 * Example page
 *
 * Bootstraps the page.
 * All DOM bindings and app.state properties
 * should be set here.
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
import App from './components/app';
import Example from './components/example/example';

(() => {
  var pageState = {
    appElement: document.getElementById('app'),
    images: [
      {
        'image': '/images/shmeh.jpg',
        'name': 'art'
      },
      {
        'image': '/images/bear-shark-unicornsurfing.jpg',
        'name': 'art'
      }
    ]
  };

  var app = new App(pageState);
  var example = new Example(app);

  const CLICKED_CLASS = '_open';

  function init() {
    // render example
    example.createImages();

    // bind example
    bindExample();
  }

  function bindExample() {
    var imageList = document.querySelector('.image-list');
    
    imageList.addEventListener('click', function(event) {
      event.target.classList.add(CLICKED_CLASS);
      app.state.appElement.querySelector('h1').innerHTML =
          event.target.getAttribute('id');
    });
  }

  init();

})();

