import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    publisher: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Publisher who owns the agent(s)
    },
    orderItems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled', 'failed'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'upi', 'paypal', 'stripe', 'razorpay', 'others'],
      required: true,
    },
    transactionId: {
      type: String,
    },
    currency: {
      type: String,
      default: 'INR',
    },
  },
  { timestamps: true }
);

const Order = model('Order', OrderSchema);
export default Order;
