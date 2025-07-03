import mongoose from 'mongoose';

const AgentDeploymentSchema = new mongoose.Schema(
  {
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agent',
      required: true,
    },

    type: {
      type: String,
      enum: ['API', 'Container', 'Hosted', 'Custom'],
      required: true,
    },

    apiDetails: {
      endpoint: { type: String },
      documentationUrl: { type: String },
      apiKeyRequired: { type: Boolean, default: false },
    },

    containerDetails: {
      imageUrl: { type: String },
      ports: [{ type: Number }],
      deploymentInstructions: { type: String },
    },

    hostedUrl: { type: String },

    customInstructions: { type: String },

    status: {
      type: String,
      enum: ['active', 'inactive', 'pending', 'failed'],
      default: 'pending',
    },
  },
  {
    timestamps: true, // replaces createdAt and updatedAt manually
  }
);

const AgentDeployment = mongoose.model('AgentDeployment', AgentDeploymentSchema);
export default AgentDeployment;
