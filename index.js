const express = require('express');
const bodyParser = require('body-parser');
const auth = require('basic-auth');
const xrayRouter = require('./routes/xray');
const userRouter = require('./routes/user');

const app = express();
const port = 3000;

// 鉴权中间件
const authMiddleware = (req, res, next) => {
    const credentials = auth(req);
    if (!credentials || credentials.name !== 'admin' || credentials.pass !== 'password') {
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Access denied');
    }
    next();
};

app.use(bodyParser.json());
app.use('/xray', authMiddleware, xrayRouter);
app.use('/users', authMiddleware, userRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
