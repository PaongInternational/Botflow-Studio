import express from 'express';
import path from 'path';
import fs from 'fs';
import simpleGit from 'simple-git';
import db from '../db.js';
import { CONFIG } from '../config.js';
const router = express.Router();

function repoToName(repo){
  return repo.replace(/(^https?:\/\/github.com\/)|(^git@github.com:)/,'').replace(/\.git$/,'').replace(/\//g,'-');
}

router.get('/', async (req,res)=>{
  const list = await db.listPlugins();
  res.json({plugins:list});
});

router.post('/install', async (req,res)=>{
  const { repo } = req.body;
  if(!repo) return res.status(400).json({error:'repo required'});
  try{
    const name = repoToName(repo);
    const dest = path.join(CONFIG.PLUGINS_DIR, name);
    if(!fs.existsSync(CONFIG.PLUGINS_DIR)) fs.mkdirSync(CONFIG.PLUGINS_DIR, { recursive:true });
    const git = simpleGit();
    await git.clone(repo, dest);
    await db.registerPlugin(name, repo);
    res.json({ok:true, name});
  }catch(e){ res.status(500).json({error: e.message}); }
});

router.post('/remove', async (req,res)=>{
  const { name } = req.body;
  if(!name) return res.status(400).json({error:'name required'});
  try{
    const dest = path.join(CONFIG.PLUGINS_DIR, name);
    if(fs.existsSync(dest)) fs.rmSync(dest, { recursive:true, force:true });
    await db.removePlugin(name);
    res.json({ok:true});
  }catch(e){ res.status(500).json({error:e.message}); }
});

router.post('/activate', async (req,res)=>{
  const { name, active } = req.body;
  if(!name) return res.status(400).json({error:'name required'});
  try{
    await db.setPluginActive(name, active?1:0);
    res.json({ok:true});
  }catch(e){ res.status(500).json({error:e.message}); }
});

export default router;
