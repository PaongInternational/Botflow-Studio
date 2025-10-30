#!/usr/bin/env bash
# Simple helper to push folder to GitHub (requires git and token)
if [ "$#" -lt 4 ]; then
  echo "Usage: $0 <folder> <user> <repo> <token>"
  exit 1
fi
FOLDER=$1; USER=$2; REPO=$3; TOKEN=$4
cd "$FOLDER"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://$USER:$TOKEN@github.com/$USER/$REPO.git
git push -u origin main
