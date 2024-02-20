const { execSync } = require('child_process');
execSync('pm2 start ../index.js');