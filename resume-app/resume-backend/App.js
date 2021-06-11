const express = require("express");
const connectDB = require("./config/db");
const router = express.Router();
var cors = require("cors");
require("./config/globalConfig.js");

const resumes = require("./routes/api/resumes");

const app = express();

// DB connection
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.get("/test", (req, res) => {
  res.send("Testing successful. App is up and running");
});

app.use("/resumes", resumes);

const port = global.gConfig.node_port;

app.listen(port, () => console.log(`Server running on port ${port}`));
