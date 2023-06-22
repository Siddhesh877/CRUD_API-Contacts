const express=require("express");
const { regesterUser,loginUser,currentUser } = require("../controllers/userController");
const router=express.Router();
const validateToken=require("../middleware/validateTokenHandler")

router.post("/register",regesterUser);
router.post("/login",loginUser);
router.get("/current",validateToken  ,currentUser);

module.exports=router; 