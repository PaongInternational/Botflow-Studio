#!/usr/bin/env bash
set -e
echo "Installing runtime dependencies for BotFlow Studio (Ubuntu)"
sudo apt update
sudo apt install -y git curl build-essential nodejs npm unzip python3
npm install -g pm2 --no-audit --no-fund || true
cd "$(pwd)/backend"
npm ci --no-audit --no-fund
cd ../frontend
npm ci --no-audit --no-fund
echo "Install complete."
