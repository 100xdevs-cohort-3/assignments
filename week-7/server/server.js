'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.app = void 0;
exports.start = start;
require('dotenv/config');
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const node_path_1 = __importDefault(require('node:path'));
const models_1 = require('./models');
const accounts_1 = require('./routes/accounts');
const courses_1 = require('./routes/courses');
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json({ limit: '32kb' }));
exports.app.get('/healthy', (req, res) => res.json({ status: 'ok' }));
exports.app.use('/admin', (0, accounts_1.accountRoutes)('admin'), courses_1.adminCourses);
exports.app.use('/users', (0, accounts_1.accountRoutes)('user'), courses_1.userCourses);
exports.app.use(express_1.default.static(node_path_1.default.join(__dirname, '../client-easy')));
const errors = (error, req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }
  const status =
    error.status ||
    (error.code === 11000
      ? 409
      : ['ValidationError', 'CastError'].includes(error.name)
        ? 400
        : 500);
  res
    .status(status)
    .json({
      message:
        status === 409
          ? 'Username already exists'
          : status === 500
            ? 'Server error'
            : error.message,
    });
};
exports.app.use(errors);
async function start() {
  if (!process.env.JWT_SECRET) throw new Error('Set JWT_SECRET in .env');
  await (0, models_1.connectToDatabase)();
  const port = Number(process.env.PORT) || 3007;
  return exports.app.listen(port, () => console.log('Coursify API: http://localhost:' + port));
}
if (require.main === module)
  start().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
