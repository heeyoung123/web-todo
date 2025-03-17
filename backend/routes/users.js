const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const {join, login} = require('../controller/UserController');
const {body, validationResult} = require('express-validator');

router.use(express.json());

const validate = ( req, res, next ) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        return next();
    }
}

router.post('/join', [
        body('user_id').notEmpty().isString().withMessage("이메일을 확인해주세요."),
        body('password').notEmpty().isString().withMessage("패스워드를 확인해주세요."),
        body('password_check').notEmpty().isString().withMessage("패스워드를 확인해주세요."),
        validate
    ],
    join);

router.post('/login', [
        body('user_id').notEmpty().isString().withMessage("이메일을 확인해주세요."),
        body('password').notEmpty().isString().withMessage("패스워드를 확인해주세요."),
        validate
    ], login);

module.exports = router;
