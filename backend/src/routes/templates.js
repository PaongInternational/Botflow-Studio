import express from 'express';
import { listTemplates, loadTemplate } from '../utils/templateLoader.js';
const router = express.Router();
router.get('/', async (req,res)=>{ try{ const t = listTemplates(); res.json({templates:t}); }catch(e){ res.status(500).json({error:e.message}); } });
router.get('/load/:name', async (req,res)=>{ try{ const tpl = loadTemplate(req.params.name); res.json({template:tpl}); }catch(e){ res.status(500).json({error:e.message}); } });
export default router;
