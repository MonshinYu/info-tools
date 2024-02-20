const path = require('path');
const { execSync } = require('child_process');
execSync(`pm2 stop ${path.join(__dirname,'..','index.js')}`);