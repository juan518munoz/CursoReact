const { response } = require("express");

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
        ok: false,
        msg: `Name can't be less than 5 letters`
    })
  }

  res.json({
    ok: true,
    msg: "registro",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: "login",
    email,
    password, 
  });
};

const renewToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
