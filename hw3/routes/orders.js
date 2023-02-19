//Lukas Miller
var express = require('express');
var router = express.Router();
//Construct 3 JSON object with Quantity and Topping
const order1 = '{"Quantity":2, "Topping":"Cherry"}';
const order2 = '{"Quantity":1, "Topping":"Chocolate"}';
const order3 = '{"Quantity":4, "Topping":"Plain"}';

//Construct array of those 3 JSON objects
allOrders = [order1,order2,order3];

/* POST array of 3 JSON object orders. */
router.post('/', function(req, res, next) {
  res.send(allOrders);
});

module.exports = router;

