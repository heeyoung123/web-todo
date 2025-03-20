const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const {
  getTodo,
  createTodo,
  modifyTodo,
  deleteTodo,
} = require("../controller/TodoController");
const jwt = require("jsonwebtoken");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    return next();
  }
};

// 사용자 인증 미들웨어
const authenticateUser = (req, res, next) => {
  const token = req.cookies.token; // 쿠키에서 토큰 추출
  if (!token) {
    return res.status(401).json({ message: "인증되지 않은 사용자입니다." });
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
    }
    req.userId = decoded.user_id; // 토큰에서 사용자 ID 추출하여 req 객체에 저장
    next();
  });
};

router.get("/", authenticateUser, getTodo);

router.post(
  "/",
  authenticateUser,
  [body("text").notEmpty().withMessage("text를 확인해주세요."), validate],
  createTodo
);

router.put("/:id", modifyTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
