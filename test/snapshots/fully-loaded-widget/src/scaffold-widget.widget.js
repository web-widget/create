import './scaffold-widget.js';

export default () => {
  let element;
  return {
    // async bootstrap() {},
    async mount({ container }) {
      element = document.createElement('scaffold-widget');
      element.createRenderRoot = () => element;
      container.appendChild(element);
    },
    // async update() {},
    async unmount({ container }) {
      container.removeChild(element);
      element = null;
    },
    // async unload() {}
  };
};