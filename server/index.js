console.log("app is loading");
const express = require("express");
const app = express();
const utils = require('./production_utils')


// used for json inside body 
app.use(express.json());


// --- must be last before listen because it handle non served route
utils.handleProduction(express,app);

const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
