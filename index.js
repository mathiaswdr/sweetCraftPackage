
import { scrollToSection, isMobileDevice } from './tools/tool';
import animations from './animations/animation';

module.exports = {
    greet: function(name) {
      return `Hello, ${name}!`;
    },
    scrollToSection: scrollToSection,
    isMobileDevice: isMobileDevice,
    animations: animations,
  };