import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const OrderItemSchema = new Schema({
  agent: {
    type: Schema.Types.ObjectId,
    ref: 'Agent',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subscriptionPlan: {
    type: String,
    enum: ['one_time', 'monthly', 'yearly'],
    required: true,
  },
  validityPeriod: {
    type: Number, // In days, if applicable
  },
  customizations: {
    type: String, // JSON or description of customizations if allowed
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'refunded'],
    default: 'active',
  },
});

export default model('OrderItem', OrderItemSchema);
