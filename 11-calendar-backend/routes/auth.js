/*
    Auth routes
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");
const router = Router();

router.post(
  "/new",
  [
    // middleware
    check("name", "Name is obligatory").not().isEmpty(),
    check("email", "Email is obligatory").isEmail(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    // middleware
    check("email", "Email is obligatory").isEmail(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
