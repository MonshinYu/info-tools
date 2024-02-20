#!/bin/bash

# 停止Xray服务
sudo systemctl stop xray

# 禁用Xray服务开机自启
sudo systemctl disable xray

# 运行Xray卸载脚本
sudo bash /usr/local/bin/xray/xray -remove

# 移除Xray安装脚本（如果存在）
if [ -f "install-release.sh" ]; then
    rm install-release.sh
fi

echo "Xray uninstalled successfully."
