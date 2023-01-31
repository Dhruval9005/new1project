const router = require("express").Router();

const userRoutes = require("./user");

// ALL THE ROUTES //
// user routes
router.use("/user", userRoutes);

module.exports = router;
