const express = require('express');
const router = express.Router();
const userCtl = require('../controllers/user.controller');
const upload = require('../middlewares/upload');
const { verifyToken } = require('../middlewares/auth.middleware');

// Public routes
router.get('/login', userCtl.loginPage);
router.post('/login', userCtl.loginUser);
router.get('/signup', userCtl.signupPage);
router.post('/signup', userCtl.signupUser);

// Protected routes
router.use(verifyToken);

// Role-based profile routes
router.get('/:role/profile', userCtl.profilePage);
router.get('/:role/profile/edit', userCtl.editProfilePage);

router.post('/:role/profile/edit', upload.single('image'), userCtl.updateProfile);

router.post('/:role/profile/delete', userCtl.deleteProfile);

module.exports = router;
