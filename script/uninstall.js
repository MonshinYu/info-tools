const path = require('path');
const { execSync } = require('child_process');
execSync(`bash ${path.join(__dirname,'..','sh','uninstall.sh')}`);