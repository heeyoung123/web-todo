const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const {createTodo, modifyTodo, deleteTodo} = require('../controller/TodoController');

router.use(express.json());

const validate = ( req, res, next ) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        return next();
    }
}

router.post('/create', [
    body('todo_name').notEmpty().withMessage("todo_name를 확인해주세요."),
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
