require('./example.scss');

/**
 * @class Example
 *
 * Example
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class Example {
  /*
   * @constructs Example
   *
   * Gets images and renders them.
   *
   * @param {Object} state passed in initial state
   */
  constructor(globalState) {
    this.state = globalState.state || {};
    this._images = this._getImages(this.state.images);
    this.section;
  }

  /**
   * Renders html.
   * @param {String} contents html to inject.
   */
  render(contents) {
    if (this.section === undefined) {
      this.section = document.createElement('section');
    }

    this.section.setAttribute('class', 'example');
    this.section.innerHTML = contents;
    this.state.appElement.appendChild(this.section);
  }

  /**
   * Creates html for images.
   */
  createImages() {
    var html = `
            <ul class="image-list">
              ${this._images.map(image => `
                <li class="item" style="background-image:url(${image})" id="${image}">
                </li>`).join('\n')}
            </ul>
        `;

    this.render(html);
  }

  /**
   * Gets canvas images from app.state.
   * @param {Object} canvasImages canvasImages
   */
  _getImages(exampleImages) {
    var i,
        images = [];

    for (i = 0; i < exampleImages.length; i++) {
      images.push(exampleImages[i].image);
    }

    return images;
  }
}

export default Example;