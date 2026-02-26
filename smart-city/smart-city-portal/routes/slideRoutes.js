const router = require("express").Router();
const Slide = require("../models/Slide");

router.get("/", async (req, res) => {
  const slides = await Slide.find();
  res.json(slides);
});

router.post("/", async (req, res) => {
  const slide = new Slide(req.body);
  await slide.save();
  res.send("Slide added");
});

router.put("/:id", async (req, res) => {
  await Slide.findByIdAndUpdate(req.params.id, req.body);
  res.send("Slide updated");
});

router.delete("/:id", async (req, res) => {
  await Slide.findByIdAndDelete(req.params.id);
  res.send("Slide deleted");
});

module.exports = router;
