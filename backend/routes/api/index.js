const router = require("express").Router();

const userRoutes = require("./user");
const addressRoutes = require("./address");

// ALL THE ROUTES //

router.use("/user", userRoutes);
router.use("/address", addressRoutes);

module.exports = router;
