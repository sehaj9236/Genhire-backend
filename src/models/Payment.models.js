import e from 'cors';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PaymentSchema = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    publisher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'INR',
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'upi', 'paypal', 'stripe', 'razorpay', 'others'],
      required: true,
    },
    gatewayTransactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'success', 'failed', 'refunded'],
      default: 'pending',
    },
    paymentGateway: {
      type: String,
      enum: ['stripe', 'razorpay', 'paypal', 'others'],
      required: true,
    },
    receiptUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Payment = model('Payment', PaymentSchema);
export default Payment;
