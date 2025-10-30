#!/usr/bin/env bash
set -e
echo "Installing runtime dependencies for BotFlow Studio (Termux)"
pkg update -y
pkg upgrade -y
pkg install -y git nodejs-lts npm unzip python
npm install -g pm2 --no-audit --no-fund || true
echo "Installing backend & frontend dependencies..."
cd "$(pwd)/backend" || exit 1
if [ -f package.json ]; then npm ci --no-audit --no-fund || npm install --no-audit --no-fund; fi
cd ../frontend
if [ -f package.json ]; then npm ci --no-audit --no-fund || npm install --no-audit --no-fund; fi
echo "Install complete."
