import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    detailedDescription: String,

    category: {
      type: String,
      enum: ['Marketing', 'Support', 'Scraping', 'Writing', 'Analytics', 'Custom'],
      required: true,
    },

    useCases: [String],

    developerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // or 'Publisher' if separate
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    pricingModel: {
      type: String,
      enum: ['subscription', 'one-time', 'freemium'],
      required: true,
    },

    
    agentDeployment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AgentDeployment',
    },

    logoUrl: {
      type: String,
    },

    demoUrl: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    tags: [String],

    status: {
      type: String,
      enum: ['active', 'pending', 'rejected', 'suspended'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);
AgentSchema.plugin(mongooseAggregatePaginate);
const Agent = mongoose.model('Agent', AgentSchema);
export default Agent;
