const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

// 팀 생성
const createTeam = (req, res) => {
    const { team_name } = req.body;

    const sql = `INSERT INTO teams (team_name) VALUES (?)`;
    const values = [team_name];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: '팀 생성 중 오류가 발생했습니다.' });
        }

        return res.status(StatusCodes.CREATED).json({ message: '팀이 성공적으로 생성되었습니다.', team_id: results.insertId });
    });
};

// 팀에 사용자 초대
const inviteUserToTeam = (req, res) => {
    const { team_id, user_id } = req.body;

    const sql = `INSERT INTO user_teams (team_id, user_id) VALUES (?, ?)`;
    const values = [team_id, user_id];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: '팀에 사용자 초대 중 오류가 발생했습니다.' });
        }

        return res.status(StatusCodes.OK).json({ message: '팀에 사용자가 성공적으로 초대되었습니다.', team_id: team_id, user_id: user_id });
    });
};

// 팀 삭제
const deleteTeam = (req, res) => {
    const { team_id } = req.body;

    const sql = `DELETE FROM teams WHERE team_id = ?`;
    const values = [team_id];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: '팀 삭제 중 오류가 발생했습니다.' });
        }

        if (results.affectedRows === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: '해당 팀을 찾을 수 없습니다.' });
        }

        return res.status(StatusCodes.OK).json({ message: '팀이 성공적으로 삭제되었습니다.', team_id: team_id });
    });
};

// 팀에서 사용자 삭제
const removeUserFromTeam = (req, res) => {
    const { team_id, user_id } = req.body;

    const sql = `DELETE FROM user_teams WHERE team_id = ? AND user_id = ?`;
    const values = [team_id, user_id];

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: '팀에서 사용자 삭제 중 오류가 발생했습니다.' });
        }

        if (results.affectedRows === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: '해당 팀 또는 사용자를 찾을 수 없습니다.' });
        }

        return res.status(StatusCodes.OK).json({ message: '팀에서 사용자가 성공적으로 삭제되었습니다.', team_id: team_id, user_id: user_id });
    });
};

module.exports = {
    createTeam,
    inviteUserToTeam,
    deleteTeam,
    removeUserFromTeam,
};
