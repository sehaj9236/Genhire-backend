import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CouponSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  description: {
    type: String,
  },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'],
    required: true,
  },
  discountValue: {
    type: Number,
    required: true,
  },
  maxDiscountAmount: {
    type: Number, // Optional: for percentage coupons, max cap on discount
  },
  minOrderValue: {
    type: Number,
    default: 0,
  },
  usageLimit: {
    type: Number, // Total times coupon can be used
  },
  usedCount: {
    type: Number,
    default: 0,
  },
  perUserLimit: {
    type: Number, // Optional: limit per user
    default: 1,
  },
  validFrom: {
    type: Date,
    required: true,
  },
  validTill: {
    type: Date,
    required: true,
  },
  applicableCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  applicableAgents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Agent',
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
const Coupon = model('Coupon', CouponSchema);
export default Coupon;
