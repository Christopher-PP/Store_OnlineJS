const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/myOrders", (req, res) => {
  res.render("cliente/orders");
});
module.exports = router;
