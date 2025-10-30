import fs from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
const DATA_DIR = './data';
if(!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR,{recursive:true});
let db;
export async function initDB(){
  if(db) return db;
  db = await open({ filename: path.join(DATA_DIR,'botflow.sqlite'), driver: sqlite3.Database });
  await db.exec(`CREATE TABLE IF NOT EXISTS ai_profiles (id TEXT PRIMARY KEY, owner TEXT, name TEXT, description TEXT, provider TEXT, encrypted_key TEXT, iv TEXT, tag TEXT, system_prompt TEXT, temperature REAL, max_tokens INTEGER, visibility TEXT, created_at INTEGER, updated_at INTEGER);
  CREATE TABLE IF NOT EXISTS plugins (name TEXT PRIMARY KEY, repo TEXT, installed_at INTEGER, active INTEGER);`);
  return db;
}
export async function listPlugins(){ const d=await initDB(); return await d.all('SELECT name,repo,installed_at,active FROM plugins'); }
export async function registerPlugin(name, repo){ const d=await initDB(); await d.run('INSERT OR REPLACE INTO plugins(name,repo,installed_at,active) VALUES(?,?,?,?)', name, repo, Date.now(), 1); }
export async function removePlugin(name){ const d=await initDB(); await d.run('DELETE FROM plugins WHERE name=?', name); }
export async function setPluginActive(name, active){ const d=await initDB(); await d.run('UPDATE plugins SET active=? WHERE name=?', active?1:0, name); }
export default { initDB, listPlugins, registerPlugin, removePlugin, setPluginActive };
