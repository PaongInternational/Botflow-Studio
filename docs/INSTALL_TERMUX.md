# Install BotFlow Studio on Termux (Android)

1. Move the zip into your Termux accessible folder and unzip:
   unzip botflow-studio-v1.5.1.zip -d ~/botflow
2. Run installer:
   bash scripts/install_termux.sh
3. Start services:
   bash scripts/start_all.sh
4. Open browser: http://localhost:5173


## n8n-like Templates
This package includes example n8n-style workflow templates in `templates/n8n/`:
- telegram-hello-world.json — a simple echo/reply workflow
- save-telegram-sqlite.json — saves incoming messages to local SQLite
- ai-summarize-telegram.json — sends message to AI profile for summarization

How to use: open Plugin Manager -> Flow Editor -> Import Template -> choose template JSON.
