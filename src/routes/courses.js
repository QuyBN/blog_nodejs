const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CourseController');

router.get ('/create', coursesController.create);
router.get ('/:id/edit', coursesController.edit);
router.post ('/handle-form-actions', coursesController.handleFormActions);
router.put ('/:id', coursesController.update);
router.delete ('/:id', coursesController.destroy);
router.delete ('/:id/force', coursesController.forceDestroy);
router.patch ('/:id/restore', coursesController.restore);
router.post ('/store', coursesController.store);
router.get ('/:slug', coursesController.show);

module.exports = router;
