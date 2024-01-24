const express = require ('express');
const{
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    handlerRefreshToken,
    logout,
} = require("../controller/userCtrl");
const {authMiddleWare, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();



router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users', getallUser);
router.get('/refresh', handlerRefreshToken);
router.get('/logout', logout);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/:id', deleteaUser);

router.put('/edit-user', authMiddleWare, updatedUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleWare, isAdmin, unblockUser);


module.exports= router;