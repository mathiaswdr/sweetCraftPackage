
import { scrollToSection, isMobileDevice } from './tools/tool';


module.exports = {
    greet: function(name) {
      return `Hello, ${name}!`;
    },
    scrollToSection: scrollToSection,
    isMobileDevice: isMobileDevice,
  };