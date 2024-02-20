#!/bin/bash

# 更新软件包列表
sudo apt update

# 安装curl和unzip
sudo apt install -y curl unzip

# 下载Xray安装脚本
curl -O https://raw.githubusercontent.com/XTLS/Xray-install/main/install-release.sh

# 添加执行权限
chmod +x install-release.sh

# 运行安装脚本
sudo ./install-release.sh

# 检查Xray是否安装成功
xray -version

# 配置Xray（根据需要进行配置）
# sudo vi /usr/local/etc/xray/config.json

# 启动Xray服务
sudo systemctl start xray

# 设置Xray服务开机自启
sudo systemctl enable xray

echo "Xray installation completed."
