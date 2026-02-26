const router = require("express").Router();
const Issue = require("../models/Issue");

router.post("/", async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();
  res.send("Issue reported");
});

router.get("/", async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

module.exports = router;
