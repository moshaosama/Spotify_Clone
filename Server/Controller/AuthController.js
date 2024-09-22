const User = require("../Model/AuthModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

exports.SignUp = async (req, res) => {
  try {
    const user = new User({
      userName: req.body.userName,
      Phone: req.body.phone,
      Email: req.body.email,
      Password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation,
    });
    if (!req.body) {
      return res.status(404).json({
        statusbar: "Fail",
        message: "Incorrect username or password.",
      });
    }
    await user.save();
    res.status(200).json({
      statusbar: "success",
      message: "Success",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      statusbar: "Fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password)) {
      return res.status(403).json({
        statusbar: "Fail",
        message: "Invalid Email and Password",
      });
    }
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(403).json({
        statusbar: "Fail",
        message: "you don't have any account",
      });
    }
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
      return res.status(403).json({
        statusbar: "Fail",
        message: "you don't have any account",
      });
    }
    const token = JWT.sign({ id: user?._id }, process.env.SecretJWT, {
      expiresIn: process.env.EXPIRETOKEN,
    });
    if (!token) {
      return res.status(403).json({
        statusbar: "Fail",
        message: "you don't have any Token",
      });
    }

    res.status(200).json({
      statusbar: "Success",
      data: user,
      Token: token,
    });
  } catch (err) {
    res.status(err.status).json({
      statusbar: "Fail",
      message: err.message,
    });
  }
};

exports.Protect = async (req, res, next) => {
  let token;
  if (!req.headers.authorization) {
    return res.status(403).json({
      statusbar: "Access Denied",
      message: "you Don't have Token",
    });
  }
  token = req.headers.authorization;

  const decoded = JWT.verify(token, process.env.SecretJWT, {
    expiresIn: process.env.EXPIRETOKEN,
  });
  if (!decoded) {
    return res.status(403).json({
      statusbar: "Fail",
      message: "you don't have any token",
    });
  }

  const user = await User.findById(decoded?.id);
  req.user = user;
  next();
};
