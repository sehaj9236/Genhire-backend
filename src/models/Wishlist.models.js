import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const WishlistSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    agents: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Agent',
      },
    ],
  },
  { timestamps: true }
);
const Wishlist = model('Wishlist', WishlistSchema);
export default Wishlist;
