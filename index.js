var prompt = require('prompt');
var colors = require('@colors/colors/safe');
//
// Setting these properties customizes the prompt.
//
prompt.message = colors.gray('Question!');
prompt.delimiter = colors.green('><');

prompt.start();

prompt.get(
  {
    properties: {
      name: {
        description: colors.blue('What is your name?'),
      },
    },
  },
  function (err, result) {
    console.log(colors.cyan('You said your name is: ' + result.name));
  }
);
