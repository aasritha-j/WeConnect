const exp = require("express");
const app = exp();
const path = require("path");

const mongoose = require("mongoose");
const userApi = require("./API/UserApi");

app.use(exp.static(path.join(__dirname, "./build/")));

app.use("/User", userApi);

// handling error for correct path

app.use((err, req, resp, next) => {
  resp.send({ message: "error", payload: err.message });
});

//dealing with page refresh
app.use("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./build/index.html"));
});

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

mongoose.connect(
  "mongodb+srv://cdb27:cdb27@atlascluster.e4ptmwb.mongodb.net/projectdata?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("open", () => console.log("db connection successful"));
db.on("error", (err) => console.log("db connection failed", err));

app.listen(4000, () => console.log("server is running on port number 4000"));
