const express = require("express");
const app = express();
const port = 9000;

//Serves static content from folder "public"
app.use(express.static("public"));

//listening port and message
app.listen(port, () => console.log(`App listening on port ${port}!`));
