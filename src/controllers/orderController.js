const { ErrorCase, SuccessCase } = require('../Helpers/helpers');
const {
  getOrdersDb,
  deleteOrderDb,
  addOrderDb,
} = require('../models/orderModel');

async function getOrders(req, res) {
  const data = await getOrdersDb();
  if (data === false) {
    ErrorCase(res);
    return;
  }
  if (!data.length) {
    return ErrorCase(res, 'No any orders yet');
  }
  SuccessCase(res, data);
}
async function deleteOrder(req, res) {
  const orderId = req.body.id;
  const data = await deleteOrderDb(orderId);
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
async function addOrder(req, res) {
  const { client_id, amount, product_id, product_name, send_to, email } =
    req.body;
  const data = await addOrderDb(
    client_id,
    amount,
    product_id,
    product_name,
    send_to,
    email
  );
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}

module.exports = { getOrders, deleteOrder, addOrder };
