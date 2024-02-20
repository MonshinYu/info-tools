const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const router = express.Router();

const xrayConfigPath = path.join(__dirname, '../data/xrayConfig.json');

// 获取 Xray 配置
router.get('/', (req, res) => {
    const xrayConfig = fs.readJsonSync(xrayConfigPath);
    res.json(xrayConfig);
});

// 更新 Xray 配置
router.put('/', (req, res) => {
    fs.writeJsonSync(xrayConfigPath, req.body);
    res.status(204).send();
});

// 删除 Xray 配置
router.delete('/', (req, res) => {
    fs.writeJsonSync(xrayConfigPath, {});
    res.status(204).send();
});

module.exports = router;
