import mongoose from 'mongoose';
const accountSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, minlength: 3, maxlength: 80 },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true },
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});
accountSchema.index({ username: 1, role: 1 }, { unique: true });
const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 150 },
    description: { type: String, required: true, trim: true, maxlength: 4000 },
    price: { type: Number, required: true, min: 0 },
    imageLink: { type: String, default: '' },
    published: { type: Boolean, default: false },
    creatorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Account' },
  },
  { timestamps: true },
);
export const Account = mongoose.model('Account', accountSchema);
export const Course = mongoose.model('Course', courseSchema);
export async function connectToDatabase(): Promise<void> {
  if (!process.env.MONGO_URI) throw new Error('Set MONGO_URI in .env');
  await mongoose.connect(process.env.MONGO_URI);
}
