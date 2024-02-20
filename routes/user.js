const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const router = express.Router();

const usersPath = path.join(__dirname, '../data/users.json');

// 获取所有用户
router.get('/', (req, res) => {
    const users = fs.readJsonSync(usersPath);
    res.json(users);
});

// 添加用户
router.post('/', (req, res) => {
    const newUser = req.body;
    const users = fs.readJsonSync(usersPath);
    users[newUser.uid] = newUser;
    fs.writeJsonSync(usersPath, users);
    res.status(201).send();
});

// 更新用户
router.put('/:uid', (req, res) => {
    const uid = req.params.uid;
    const updatedUser = req.body;
    const users = fs.readJsonSync(usersPath);
    users[uid] = updatedUser;
    fs.writeJsonSync(usersPath, users);
    res.status(204).send();
});

// 删除用户
router.delete('/:uid', (req, res) => {
    const uid = req.params.uid;
    const users = fs.readJsonSync(usersPath);
    delete users[uid];
    fs.writeJsonSync(usersPath, users);
    res.status(204).send();
});

module.exports = router;
