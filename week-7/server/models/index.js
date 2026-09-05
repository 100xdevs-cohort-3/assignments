'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Course = exports.Account = void 0;
exports.connectToDatabase = connectToDatabase;
const mongoose_1 = __importDefault(require('mongoose'));
const accountSchema = new mongoose_1.default.Schema({
  username: { type: String, required: true, trim: true, minlength: 3, maxlength: 80 },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true },
  purchasedCourses: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Course' }],
});
accountSchema.index({ username: 1, role: 1 }, { unique: true });
const courseSchema = new mongoose_1.default.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 150 },
    description: { type: String, required: true, trim: true, maxlength: 4000 },
    price: { type: Number, required: true, min: 0 },
    imageLink: { type: String, default: '' },
    published: { type: Boolean, default: false },
    creatorId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'Account' },
  },
  { timestamps: true },
);
exports.Account = mongoose_1.default.model('Account', accountSchema);
exports.Course = mongoose_1.default.model('Course', courseSchema);
async function connectToDatabase() {
  if (!process.env.MONGO_URI) throw new Error('Set MONGO_URI in .env');
  await mongoose_1.default.connect(process.env.MONGO_URI);
}
