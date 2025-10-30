#!/usr/bin/env bash
set -e
echo "Starting backend and frontend using pm2 (if available)"
cd "$(pwd)/backend"
if command -v pm2 >/dev/null 2>&1; then
  pm2 start src/server.js --name botflow-backend || true
else
  node src/server.js &
fi
cd ../frontend
if command -v pm2 >/dev/null 2>&1; then
  pm2 start npm --name botflow-frontend -- run -- dev || true
else
  npm run dev &
fi
echo "Started. Visit http://localhost:5173"
