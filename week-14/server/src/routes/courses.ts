import { Router } from 'express';
import mongoose from 'mongoose';
import { Account, Course } from '../models';
import { auth } from '../middleware/auth';
import { asyncRoute } from '../lib/security';
interface CourseInput {
  title: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
}
function courseInput(body: Record<string, unknown>): CourseInput {
  const { title, description, price, imageLink = '', published = false } = body;
  if (
    typeof title !== 'string' ||
    !title.trim() ||
    title.length > 150 ||
    typeof description !== 'string' ||
    !description.trim() ||
    description.length > 4000 ||
    typeof price !== 'number' ||
    !Number.isFinite(price) ||
    price < 0 ||
    typeof imageLink !== 'string' ||
    imageLink.length > 2000 ||
    typeof published !== 'boolean'
  ) {
    throw Object.assign(
      new Error('Enter a title, description, nonnegative price, and valid published status'),
      { status: 400 },
    );
  }
  if (imageLink) {
    try {
      if (!['https:', 'http:'].includes(new URL(imageLink).protocol)) throw new Error();
    } catch {
      throw Object.assign(new Error('Image URL must use http or https'), { status: 400 });
    }
  }
  return { title: title.trim(), description: description.trim(), price, imageLink, published };
}
export const adminCourses = Router();
adminCourses.use(auth('admin'));
adminCourses.get(
  '/courses',
  asyncRoute(async (req, res) => {
    res.json({
      courses: await Course.find({ creatorId: res.locals.accountId }).sort({ createdAt: -1 }),
    });
  }),
);
adminCourses.post(
  '/courses',
  asyncRoute(async (req, res) => {
    const course = await Course.create({
      ...courseInput(req.body),
      creatorId: res.locals.accountId,
    });
    res.status(201).json({ message: 'Course created successfully', courseId: course.id, course });
  }),
);
adminCourses.put(
  '/courses/:courseId',
  asyncRoute(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.courseId)) {
      res.status(400).json({ message: 'Invalid course id' });
      return;
    }
    const course = await Course.findOneAndUpdate(
      { _id: req.params.courseId, creatorId: res.locals.accountId },
      { $set: courseInput(req.body) },
      { new: true, runValidators: true },
    );
    res
      .status(course ? 200 : 404)
      .json(
        course
          ? { message: 'Course updated successfully', course }
          : { message: 'Course not found' },
      );
  }),
);
export const userCourses = Router();
userCourses.use(auth('user'));
userCourses.get(
  '/courses',
  asyncRoute(async (req, res) =>
    res.json({ courses: await Course.find({ published: true }).sort({ createdAt: -1 }) }),
  ),
);
userCourses.post(
  '/courses/:courseId',
  asyncRoute(async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.courseId)) {
      res.status(400).json({ message: 'Invalid course id' });
      return;
    }
    const course = await Course.findOne({ _id: req.params.courseId, published: true });
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }
    const account = await Account.findByIdAndUpdate(res.locals.accountId, {
      $addToSet: { purchasedCourses: course._id },
    });
    if (!account) {
      res.status(401).json({ message: 'Account no longer exists' });
      return;
    }
    res.json({ message: 'Course purchased successfully' });
  }),
);
userCourses.get(
  '/purchasedCourses',
  asyncRoute(async (req, res) => {
    const account = await Account.findById(res.locals.accountId).populate('purchasedCourses');
    if (!account) {
      res.status(401).json({ message: 'Account no longer exists' });
      return;
    }
    res.json({ purchasedCourses: account.purchasedCourses });
  }),
);
