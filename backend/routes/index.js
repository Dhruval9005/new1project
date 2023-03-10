const router = require("express").Router();
const apiRoutes = require("./api");

router.use(apiRoutes);
router.use((req, res) => res.status(404).json("No API route found"));

module.exports = router;
