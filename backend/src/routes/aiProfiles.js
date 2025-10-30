import express from 'express';
import db from '../db.js';
import { encrypt, decrypt } from '../helpers/crypto.js';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

router.post('/profiles', async (req,res)=>{
  const body = req.body || {};
  const { name, description, provider, apiKey, system_prompt, temperature=0.7, max_tokens=1024, visibility='private' } = body;
  if(!apiKey || !name) return res.status(400).json({error:'name and apiKey required'});
  const enc = encrypt(apiKey);
  const id = uuidv4();
  const d = await db.initDB();
  await d.run('INSERT INTO ai_profiles(id,owner,name,description,provider,encrypted_key,iv,tag,system_prompt,temperature,max_tokens,visibility,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    id, 'local', name, description, provider, enc.cipher, enc.iv, enc.tag, system_prompt, temperature, max_tokens, visibility, Date.now(), Date.now());
  res.json({ok:true,id});
});

router.get('/profiles', async (req,res)=>{
  const d = await db.initDB();
  const rows = await d.all('SELECT id,owner,name,description,provider,system_prompt,temperature,max_tokens,visibility,created_at,updated_at FROM ai_profiles');
  res.json({profiles: rows});
});

export default router;
