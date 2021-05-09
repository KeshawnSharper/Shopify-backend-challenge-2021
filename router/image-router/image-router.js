const express = require('express');
const router = express.Router();

const images = require("./image-model");


router.get("/", async (req, res) => {
  try {
    res.json(await images.find());
  } catch (e) {
    res.json({ msg: e });
  }
})

// router.post("/", async (req, res) => {
//   if (!req.body.title)  {
//     res.status(500).json({message:"Please add a title property"})
//   }
//   if (!req.body.user_id)  {
//     res.status(500).json({message:"Please add a user_id property"})
//   }
//   try {
//     req.body.id = await facts.countDocuments() + 1
//     await facts.create(
//       req.body
// )
//     res.json(req.body);
//   } catch (e) {
//     res.json({ msg: e });
//   }
// });
// router.get("/user/:user_id", async (req, res) => {
//   try {
//     res.json(await facts.find({id:req.params.user_id}));
//   } catch (e) {
//     res.json({ msg: e });
//   }
// });
module.exports = router;