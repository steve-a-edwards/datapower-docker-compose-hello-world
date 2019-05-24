var hm = require('header-metadata');

// Set the X-Hello-World header 
hm.current.set('X-Hello-World', 'Hello from DataPower domain foo');

session.input.readAsBuffer (function (error, buffer) {
    if (error) {
      // throw the error if there was one
      throw error;
    }
    // Since this simple application only returns a test hello world
    // string, we'll just prepend our placeholder string
    session.output.write("DataPower Proxied: " + buffer.toString());
    // Steve Edwards added the following to see in the logs:
    // Log level in default domain set to notice: 
    console.notice("DataPower received response from backend: " + buffer.toString());
    
    // Log target wsrr-log set up
    // var logWSRR = console.options({'category':'wsrr'});
    // logWSRR.notice('DataPower logged - A.');
});

