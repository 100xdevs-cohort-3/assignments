'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.userCourses = exports.adminCourses = void 0;
const express_1 = require('express');
const mongoose_1 = __importDefault(require('mongoose'));
const models_1 = require('../models');
const auth_1 = require('../middleware/auth');
const security_1 = require('../lib/security');
function courseInput(body) {
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
exports.adminCourses = (0, express_1.Router)();
exports.adminCourses.use((0, auth_1.auth)('admin'));
exports.adminCourses.get(
  '/courses',
  (0, security_1.asyncRoute)(async (req, res) => {
    res.json({
      courses: await models_1.Course.find({ creatorId: res.locals.accountId }).sort({
        createdAt: -1,
      }),
    });
  }),
);
exports.adminCourses.post(
  '/courses',
  (0, security_1.asyncRoute)(async (req, res) => {
    const course = await models_1.Course.create({
      ...courseInput(req.body),
      creatorId: res.locals.accountId,
    });
    res.status(201).json({ message: 'Course created successfully', courseId: course.id, course });
  }),
);
exports.adminCourses.put(
  '/courses/:courseId',
  (0, security_1.asyncRoute)(async (req, res) => {
    if (!mongoose_1.default.isValidObjectId(req.params.courseId)) {
      res.status(400).json({ message: 'Invalid course id' });
      return;
    }
    const course = await models_1.Course.findOneAndUpdate(
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
exports.userCourses = (0, express_1.Router)();
exports.userCourses.use((0, auth_1.auth)('user'));
exports.userCourses.get(
  '/courses',
  (0, security_1.asyncRoute)(async (req, res) =>
    res.json({ courses: await models_1.Course.find({ published: true }).sort({ createdAt: -1 }) }),
  ),
);
exports.userCourses.post(
  '/courses/:courseId',
  (0, security_1.asyncRoute)(async (req, res) => {
    if (!mongoose_1.default.isValidObjectId(req.params.courseId)) {
      res.status(400).json({ message: 'Invalid course id' });
      return;
    }
    const course = await models_1.Course.findOne({ _id: req.params.courseId, published: true });
    if (!course) {
      res.status(404).json({ message: 'Course not found' });
      return;
    }
    const account = await models_1.Account.findByIdAndUpdate(res.locals.accountId, {
      $addToSet: { purchasedCourses: course._id },
    });
    if (!account) {
      res.status(401).json({ message: 'Account no longer exists' });
      return;
    }
    res.json({ message: 'Course purchased successfully' });
  }),
);
exports.userCourses.get(
  '/purchasedCourses',
  (0, security_1.asyncRoute)(async (req, res) => {
    const account = await models_1.Account.findById(res.locals.accountId).populate(
      'purchasedCourses',
    );
    if (!account) {
      res.status(401).json({ message: 'Account no longer exists' });
      return;
    }
    res.json({ purchasedCourses: account.purchasedCourses });
  }),
);
