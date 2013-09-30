var componentScriptBuilder = require('component-script-builder');

var filepath = componentScriptBuilder.write({
  cwd: './src/',
  stripPrefix: 'src/'
});

module.exports = [filepath];
