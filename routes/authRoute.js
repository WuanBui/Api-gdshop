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
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrder,
    updateOrderStatus,
    getAllOrders,
} = require("../controller/userCtrl");
const {authMiddleWare, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();

router.put('/password',authMiddleWare, updatePassword)

router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users', getallUser);
router.get('/refresh', handlerRefreshToken);
router.get('/logout', logout);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/:id', deleteaUser);
router.delete("/empty-cart", authMiddleware, emptyCart);

router.put('/edit-user', authMiddleWare, updatedUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleWare, isAdmin, unblockUser);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.put("/save-address", authMiddleware, saveAddress);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);

router.put(
    "/order/update-order/:id",
    authMiddleware,
    isAdmin,
    updateOrderStatus
  );



module.exports = router;