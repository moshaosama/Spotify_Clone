const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter a  userName"],
  },
  Phone: {
    type: String,
    required: [true, "Please enter a phone number"],
  },
  Email: {
    type: String,
    validate: [validator.isEmail],
    required: [true, "Please enter a valid email"],
  },
  Password: {
    type: String,
    required: [true, "Please enter a Password"],
    minlength: 6,
    maxlength: 10,
  },
  passwordConfirmation: {
    type: String,
    required: [true, "Please enter a passwordConf"],
    validate: {
      validator(el) {
        return el === this.Password;
      },
    },
  },
});

userSchema.pre("save", async function (next) {
  const Salt = 12;
  this.Password = await bcrypt.hash(this.Password, Salt);
  this.passwordConfirmation = undefined;
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
