const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const dotenv = require('dotenv').config();

// To-Do 항목 생성
const createTodo = (req, res) => {
    const { team_name } = req.body;
    // 토큰에서 user_id 가져오기
    const token = req.cookies.token;
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: '로그인이 필요합니다.' });
    }
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    const user_id = decoded.user_id;

    // user_id와 team_id 중 하나만 존재하는지 확인
    if ((user_id && team_id) || (!user_id && !team_id)) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'user_id 또는 team_id 중 하나만 제공해야 합니다.' });
    }

    // user_id 또는 team_id가 존재하는지 확인
    if (!user_id && !team_id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'user_id 또는 team_id 중 하나는 반드시 제공해야 합니다.' });
    }

    const sql = `INSERT INTO todos (name, user_id, team_id, created_at) VALUES (?, ?, ?, NOW())`;
    const values = [todo_name, user_id, team_id];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'To-Do 항목 생성 중 오류가 발생했습니다.' });
        }

        return res.status(StatusCodes.CREATED).json({ message: 'To-Do 항목이 성공적으로 생성되었습니다.', todo_id: results.insertId });
    });
};

// To-Do 항목 수정
const modifyTodo = (req, res) => {
    const { todo_id, todo_new_name, done } = req.body;

    if (!todo_id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'todo_id를 확인해주세요.' });
    }

    // 수정할 내용이 있는지 확인
    if (!todo_new_name && done === undefined) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: '수정할 내용이 없습니다.' });
    }

    let sql = `UPDATE todos SET `;
    const values = [];

    if (todo_new_name) {
        sql += `name = ?, `;
        values.push(todo_new_name);
    }

    if (done !== undefined) {
        sql += `done = ?, `;
        values.push(done);
    }

    // 마지막 쉼표 제거
    sql = sql.slice(0, -2);

    sql += ` WHERE id = ?`;
    values.push(todo_id);

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'To-Do 항목 수정 중 오류가 발생했습니다.' });
        }

        if (results.affectedRows === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: '해당 To-Do 항목을 찾을 수 없습니다.' });
        }

        return res.status(StatusCodes.OK).json({ message: 'To-Do 항목이 성공적으로 수정되었습니다.', todo_id: todo_id });
    });
};

// To-Do 항목 삭제
const deleteTodo = (req, res) => {
    const { todo_id } = req.body;

    if (!todo_id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'todo_id를 확인해주세요.' });
    }

    const sql = `DELETE FROM todos WHERE id = ?`;
    const values = [todo_id];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'To-Do 항목 삭제 중 오류가 발생했습니다.' });
        }

        if (results.affectedRows === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: '해당 To-Do 항목을 찾을 수 없습니다.' });
        }

        return res.status(StatusCodes.OK).json({ message: 'To-Do 항목이 성공적으로 삭제되었습니다.', todo_id: todo_id });
    });
};

module.exports = {
    createTodo,
    modifyTodo,
    deleteTodo
};
