const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("admin/dashboard");
});
module.exports = router;
