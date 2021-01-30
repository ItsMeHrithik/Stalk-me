const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DBConnection_url = require("./config/keys.js");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//App config
const app = express();
const port = process.env.PORT || 7000;


//middleWares
app.use(express.json());
app.use(cors());
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//DB config
mongoose
  .connect(DBConnection_url.mongoConnection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).send("Lets Stalk some profile");
});


//Listerns
app.listen(port, () => console.log(`listening on localhost: ${port}`));
