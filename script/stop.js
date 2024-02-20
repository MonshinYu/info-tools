const { execSync } = require('child_process');
execSync('pm2 stop ../index.js');