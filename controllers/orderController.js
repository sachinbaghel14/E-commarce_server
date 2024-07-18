const Order = require('../models/Order');

// Place an order
exports.placeOrder = async (req, res) => {
  const { orderItems, totalPrice, shippingAddress } = req.body;

  try {
    const newOrder = new Order({
      user: req.user.id,
      orderItems,
      totalPrice,
      shippingAddress,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get user orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('orderItems.product', 'PName price');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all orders (admin)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('orderItems.product', 'PName price');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update order status (admin)
exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  try {
    let order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order.status = status;

    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
