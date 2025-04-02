const exp = require("express");
const userApi = exp.Router();

const user = require("../models/userModel");
const errorHandler = require("express-async-handler");
const bcryptjs = require("bcrypt");

userApi.use(exp.json());

userApi.get(
  "/get-product/:client",
  errorHandler(async (req, resp) => {
    console.log("Im here");
    // console.log("req.params", req.params);
    let User = await user.findOne({ user: req.params.client });
    console.log(User);
    resp.send(User.product);
  })
);

userApi.put(
  "/login",
  errorHandler(async (req, resp) => {
    console.log(req.body);
    let presentUser = await user.findOne({ user: req.body.user });
    if (presentUser === null) {
      resp.send("invalid user");
    } else {
      let result = await bcryptjs.compare(
        req.body.password,
        presentUser.password
      );
      if (result) resp.send("login success");
      else resp.send("invalid password");
    }
  })
);

userApi.post(
  "/create-user",
  errorHandler(async (req, resp) => {
    //console.log(req.body);
    let existUser = await user.findOne({ user: req.body.user });

    if (existUser === null) {
      password = req.body.password;
      hashPassword = await bcryptjs.hash(password, 3);
      req.body.password = hashPassword;
      let userObj = new user(req.body);
      await userObj.save();
      resp.send("user created");
    } else {
      resp.send("user already exist");
      alert("User Already existed");
    }
  })
);

userApi.put(
  "/add-product",
  errorHandler(async (req, resp) => {
    data = req.body;
    console.log("data", data);

    let dataArr = await user.findOne({ user: data.user });

    let product = dataArr.product;

    console.log("data.product", data.product);
    product.push(data.product);
    console.log("product", product);

    await user.updateOne({ user: data.user }, { product: product });

    resp.send("user updated");
  })
);

module.exports = userApi;
