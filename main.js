var componentScriptBuilder = require('component-script-builder');

var filepath = componentScriptBuilder.createWrite({
  cwd: 'src/'
});

module.exports = [filepath];
