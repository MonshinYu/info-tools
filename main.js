const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const xrayConfigPath = '/usr/local/etc/xray/config.json';

app.use(express.json());

// 读取Xray配置
function readXrayConfig() {
    return JSON.parse(fs.readFileSync(xrayConfigPath, 'utf8'));
}

// 写入Xray配置
function writeXrayConfig(config) {
    fs.writeFileSync(xrayConfigPath, JSON.stringify(config, null, 4), 'utf8');
}

// 添加节点
app.post('/api/nodes', (req, res) => {
    const newNode = req.body;
    const config = readXrayConfig();
    config.inbounds = config.inbounds || [];
    config.inbounds.push(newNode);
    writeXrayConfig(config);
    res.send('Node added');
});

// 删除节点
app.delete('/api/nodes/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const config = readXrayConfig();
    if (index >= 0 && index < config.inbounds.length) {
        config.inbounds.splice(index, 1);
        writeXrayConfig(config);
        res.send('Node removed');
    } else {
        res.status(404).send('Node not found');
    }
});

// 列出节点
app.get('/api/nodes', (req, res) => {
    const config = readXrayConfig();
    res.json(config.inbounds || []);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
