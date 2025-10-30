import fs from 'fs';
import path from 'path';

export function listTemplates(){
  const dir = path.join(process.cwd(), '..', '..', 'templates', 'n8n');
  if(!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.json'));
  return files.map(f=>({ name: f, path: path.join(dir,f) }));
}

export function loadTemplate(name){
  const dir = path.join(process.cwd(), '..', '..', 'templates', 'n8n');
  const p = path.join(dir, name);
  if(!fs.existsSync(p)) throw new Error('Template not found');
  return JSON.parse(fs.readFileSync(p,'utf8'));
}
