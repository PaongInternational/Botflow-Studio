#!/usr/bin/env bash
set -e
ROOT="$(pwd)"
OUT="dist-ready"
ZIPNAME="botflow-studio-v2.0.0-ready.zip"
rm -rf "$OUT" "$ZIPNAME"
mkdir -p "$OUT"
echo "Installing backend deps..."
cd backend
npm ci --no-audit --no-fund || npm install --no-audit --no-fund
cd ../frontend
npm ci --no-audit --no-fund || npm install --no-audit --no-fund
npm run build
cd ..
cp -r backend "$OUT/backend"
mkdir -p "$OUT/frontend-dist"
cp -r frontend/dist "$OUT/frontend-dist"
cp README.md LICENSE "$OUT/"
echo "Creating ZIP $ZIPNAME ..."
zip -r "$ZIPNAME" "$OUT"
echo "Created $ZIPNAME"
