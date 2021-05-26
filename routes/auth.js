const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const connectDB = require('../config/database');

router.post('/registration',async (req,res) => {

    connectDB.query(sql, (err, result) => {
        if(err) {
           res.status(500).send
           throw err; 
        }
        else res.json("hui");
    })
});

router.post('/login')

router.get(

    '/users',

    [
        check("login", "Укажите бренд").not().isEmpty(),
        check("password", "Укажите цену").not().isEmpty()
    ],

    async (req,res) => {
        const {login, password} = req.body;
        let sql = `SELECT * FROM cpu WHERE login = ${login}, password = ${password} LIMIT 1`;
        connectDB.query(sql, (err, result) => { 
            if(err) {
            res.status(500).send
            throw err; 
            }
            else res.json(result);
        })
    }
);

module.exports = router