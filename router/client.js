const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/myOrders", (req, res) => {
  res.render("cliente/orders");
});
router.get("/cart", (req, res) => {
  res.render("cliente/carrito");
});
module.exports = router;
