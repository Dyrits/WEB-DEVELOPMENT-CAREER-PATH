// Dependencies:
const EXPRESS = require('express');
const CORS = require("cors");
const BODY_PARSER = require("body-parser");

// Local dependencies:
const _api = require('./server/api');

const app = EXPRESS();

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(CORS());

// Add middware for parsing request bodies here:
app.use(BODY_PARSER.json());

// Mount your existing apiRouter below at the '/api' path.
app.use("/api", _api);


// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

// Export the module:
module.exports = app;
