import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    review: { type: Number, required: true },
    comment: { type: String, required: true },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export async function getMealRating(mealId) {
  const result = await Review.aggregate([
    { $match: { meal: new mongoose.Types.ObjectId(mealId) } },
    {
      $group: {
        _id: null,
        avgRating: { $avg: "$review" },
        totalReviews: { $sum: 1 },
      },
    },
  ]);

  if (result.length === 0) return { avgRating: 0, totalReviews: 0 };

  return result[0];
}

export default Review;
