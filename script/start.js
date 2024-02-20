const path = require('path');
const { execSync } = require('child_process');
execSync(`pm2 start ${path.join(__dirname,'..','index.js')}`);