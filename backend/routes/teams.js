const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {
    createTeam,
    inviteUserToTeam,
    deleteTeam,
    removeUserFromTeam,
} = require('../controller/TeamController');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

router.use(express.json());
router.use(cookieParser());

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return next();
    }
};

// 팀 생성
router.post('/create', [
    body('team_name').notEmpty().withMessage('team_name을 확인해주세요.'),
    validate
], createTeam);

// 팀에 사용자 초대
router.post('/invite', [
    body('team_id').notEmpty().withMessage('team_id를 확인해주세요.'),
    body('user_id').notEmpty().withMessage('user_id를 확인해주세요.'),
    validate
], inviteUserToTeam);

// 팀 삭제
router.delete('/delete', [
    body('team_id').notEmpty().withMessage('team_id를 확인해주세요.'),
    validate
], deleteTeam);

// 팀에서 사용자 삭제
router.delete('/remove', [
    body('team_id').notEmpty().withMessage('team_id를 확인해주세요.'),
    body('user_id').notEmpty().withMessage('user_id를 확인해주세요.'),
    validate
], removeUserFromTeam);

module.exports = router;
