const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const {getTodo, createTodo, modifyTodo, deleteTodo} = require('../controller/TodoController');
const jwt = require('jsonwebtoken');

const validate = ( req, res, next ) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        return next();
    }
}

// 사용자 인증 미들웨어
const authenticateUser = (req, res, next) => {
    const token = req.cookies.token; // 쿠키에서 토큰 추출
    if (!token) {
        return res.status(401).json({ message: '인증되지 않은 사용자입니다.' });
    }

    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
        }
        req.userId = decoded.user_id; // 토큰에서 사용자 ID 추출하여 req 객체에 저장
        next();
    });
};

router.get('/', authenticateUser, getTodo);

router.post('/create', authenticateUser, [
    body('name').notEmpty().withMessage("name를 확인해주세요."),
    body().custom((value, {req}) => {
        const {user_id, team_id} = req.body;
        if ((user_id && team_id) || (!user_id && !team_id)) {
            throw new Error('user_id 또는 team_id 중 하나만 제공해야 합니다.');
        }
        return true;
    }),
    validate
], createTodo);

router.put('/modify', [
    body('todo_id').notEmpty().withMessage("todo_id를 확인해주세요."),
    validate
], modifyTodo);

router.delete('/delete',[
    body('todo_id').notEmpty().withMessage("todo_id를 확인해주세요."),
    validate
], deleteTodo);

module.exports = router;
