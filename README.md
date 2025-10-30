![logo](https://cdn.yupra.my.id/yp/qm656enk.jpg)

Community: [WhatsApp Channel](https://whatsapp.com/channel/0029Vb6cgi6LSmbec90kZv02) | [Discord](https://discord.gg/h29Hrudn7)

# BotFlow Studio / DiagramFlow Tele v2.0.0 — Final Full Power (Scaffold)

This repository is the full scaffold for BotFlow Studio (aka DiagramFlow Tele) v2.0.0.
It is optimized for Termux (Android 6–15), Ubuntu/Debian VPS, and desktop.

**Important:** This package is a source scaffold. Dependencies (node_modules) are intentionally NOT included.
Run the installer scripts to fetch dependencies and build the project.

## Quick highlights
- Plugin hub with extremely simplified install (paste GitHub repo URL or use "search by user/repo")
- AI Tools with profile modal for API key, name, role/system-prompt
- Telegram bot template and quick-connect via frontend UI
- VSCode mini, terminal, flow editor placeholders
- Auto theme (system) + toggle in sidebar
- PM2 + Docker sample included

## Quick Install (Termux)
```bash
# move zip into Termux home and unzip, or git clone the repo
cd ~/storage/shared/Download
unzip botflow-studio-v2.0.0.zip -d ~/botflow
cd ~/botflow
bash scripts/install_termux.sh
bash scripts/start_all.sh
# open http://localhost:5173
```

## Quick Install (Ubuntu / VPS)
```bash
git clone <repo>
cd botflow
bash scripts/install_ubuntu.sh
bash scripts/start_all.sh
```

## Plugin workflow (super simplified)
1. Open Dashboard → Plugin Manager
2. Click "Install from GitHub" → paste `owner/repo` (or full URL)
3. The backend will `git clone` into `backend/plugins/<owner-repo>` and auto-register.
4. Use "Activate" toggle to enable the plugin. Update / Remove buttons available.

## AI Tools
- When installing `ai-tools` plugin, a modal will ask for API key, name, visibility, and role prompt.
- Profiles are stored encrypted and can be edited/deleted later.

## Contributing
See `docs/CONTRIBUTING.md` for plugin format and hooks.

Credits: Paong & Evelyn
