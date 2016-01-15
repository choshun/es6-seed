/**
 * @class App
 *
 * Global object for state
 *
 * @author choshun.snyder@gmail.com (Choshun Snyder)
 */
class App {
  /*
   * @constructs App
   *
   * What keeps track of app state/point of truth for app.
   * This also should have shared functions so components
   * don't need to call eachother.
   *
   * @param {Object} state passed in initial state
   */
  constructor(state) {
    this.state = state || {};
  }

  /**
   * Set app state.
   * @param {Object} state state.
   */
  set(state) {
    this.state = state;
  }

  /**
   * Set a property on state.
   * @param {String} key key.
   * @param {String} value value of key.
   */
  setProperty(key, value) {
    this.state[key] = value;
  }

  /**
   * Get app state.
   * @return {Object} this.state app state
   */
  get() {
    return this.state;
  }
};

export default App;
