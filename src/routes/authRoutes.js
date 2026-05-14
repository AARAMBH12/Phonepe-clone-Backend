const express=require('express');
const router=express.Router();
const { protect } = require('../middlewares/authMiddleware');

const {registerUser,loginUser,setupMpin,getUserProfile}=require('../controllers/authController');


router.post('/register',registerUser);
router.post('/login', loginUser);
router.post('/set-mpin',protect, setupMpin);
router.post('/profile',protect, getUserProfile);

module.exports=router;