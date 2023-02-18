const router = require("express").Router();
const { requireUserAuth } = require("../../middleware/auth");
const Address = require("../../models/address");

// ADD NEW ADDRESS API //
router.post("/add", requireUserAuth, async (req, res) => {
  try {
    // change to req.user._id after adding requireUserAuth
    const userId = req.user._id;
    const address = new Address({
      ...req.body,
      user: userId,
    });

    const addressDoc = await address.save();
    res.status(200).json({
      success: true,
      message: "Address has been added successfully",
      address: addressDoc,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: "Your request could no be processed. Please try again",
    });
  }
});

// GET ALL ADDRESSES API //
router.get("/", requireUserAuth, async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.user._id });

    res.status(200).json({
      success: true,
      addresses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Your request could no be processed. Please try again",
    });
  }
});

// GET ADDRESS BY ID API //
router.get("/:id", requireUserAuth, async (req, res) => {
  try {
    console.log(req.params.id);
    const addressId = req.params.id;
    const addressDoc = await Address.findOne({ _id: addressId });

    if (!addressDoc) {
      return res.status(404).json({
        success: false,
        message: `Cannot find Address with the _id : ${addressId}`,
      });
    }

    res.status(200).json({
      success: true,
      address: addressDoc,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: "Your request could not be processed. Please try again",
    });
  }
});

// UPDATE ADDRESS BY ID API //
router.put("/update/:id", requireUserAuth, async (req, res) => {
  try {
    const addressId = req.params.id;
    const update = req.body;
    const query = { _id: addressId };

    const addressDoc = await Address.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Address has been updated successfully",
      address: addressDoc,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Your request could not be processed. Please try again",
    });
  }
});

// DELETE ADDRESS BY ID API //
router.delete("/delete/:id", requireUserAuth, async (req, res) => {
  try {
    const addressDoc = await Address.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Address has been deleted successfully",
      address: addressDoc,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
