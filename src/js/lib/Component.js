import Store from '../store/Store.js';

export default class Component {
  constructor(props = {}) {
    let self = this;

    this.render = this.render || function() {};

    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render());
    }

    if (Object.prototype.hasOwnProperty.call(props, 'elem')) {
      this.elem = props.elem;
    }
  }
}
