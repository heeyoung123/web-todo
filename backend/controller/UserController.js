const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv').config();

const join = (req, res) => {
    let {user_id, password, password_check} = req.body;

    let sql = `INSERT INTO users (user_id, password, salt) VALUES (?, ?, ?)`

    // 비밀번호 암호화
    const salt = crypto.randomBytes(64).toString('base64');
    const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');

    let values = [user_id, hashPassword, salt];

    if( password === password_check ){
        conn.query(sql, values, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            };
    
            return res.status(StatusCodes.CREATED).json(results);
        });
    }else{
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
};

const login = (req, res) => {
    const {user_id , password} = req.body;

    let sql = `SELECT * FROM users WHERE user_id =?`;
    conn.query(sql, user_id,
        (err, results) => {
            if(err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            };

            const loginUser = results[0];

            const hashPassword = crypto.pbkdf2Sync(password, loginUser.salt, 10000, 64, 'sha512').toString('base64');

            if(loginUser && hashPassword == loginUser.password){
                // token 만들기
                const token = jwt.sign({
                        user_id : loginUser.user_id,
                }, process.env.PRIVATE_KEY, {
                    expiresIn : '1h',
                    issuer : "Donggeon"
                });
                res.cookie('token', token, {
                    httpOnly : true
                });

                console.log(token);

                return res.status(StatusCodes.OK).json(results);
            }else{
                return res.status(StatusCodes.UNAUTHORIZED).end();
            }
        }
    );
};

module.exports = {
    join,
    login
};