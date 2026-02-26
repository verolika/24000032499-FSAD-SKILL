const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

/* ===============================
   SIGNUP ROUTE
   =============================== */
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: "user"
    });

    await user.save();

    res.json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
});

/* ===============================
   LOGIN ROUTE
   =============================== */
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send("User not found");

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.send("Wrong password");

    // redirect instead of JSON
    if (user.role === "admin") {
      return res.redirect("/dashboard.html");
    } else {
      return res.redirect("/index.html");
    }

  } catch (err) {
    console.log(err);
    res.send("Login error");
  }
});

module.exports = router;