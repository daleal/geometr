import * as components from './components';

const Geometr = {
  install(Vue, options = {}) { // eslint-disable-line no-unused-vars
    Object.keys(components).forEach((key) => {
      Vue.use(components[key]);
    });
  },
};

export default Geometr;
