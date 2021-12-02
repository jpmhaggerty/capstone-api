require('dotenv').config();

const app = require("./app");
const port = process.env.PGPORT;

app.listen( port || 8080 )

//Delete at next opportunity