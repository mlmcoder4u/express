const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  create: (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(`name ${name} | email ${email} | password ${password}`);
    userModel.create(req.body, (err, result) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "User added successfully",
          data: null,
        });
      }
    });
  },

  authenticate: (req, res, next) => {
    userModel.findOne({ email: req.body.email }, (err, userInfo) => {
      if (err) {
        next(err);
      } else {
        const isPasswordMatched = bcrypt.compareSync(
          req.body.password,
          userInfo.password
        );

        if (isPasswordMatched) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );
          res.json({
            status: "success",
            message: "User successfully authenticated",
            token: token,
          });
        } else {
          res.json({
            status: "error",
            message: "Password not matched",
            data: null,
          });
        }
      }
    });
  },

  update: (req, res, next) => {
    userModel.findByIdAndUpdate(req.params.id, req.body, (err, userInfo) => {
      if (err) {
        next(err);
      } else {
        if (userInfo) {
          res.json({
            status: "success",
            message: "User updated successfully",
            data: null,
          });
        } else {
          res.json({
            status: "failure",
            message: "User not found",
            data: null,
          });
        }
      }
    });
  },
};
