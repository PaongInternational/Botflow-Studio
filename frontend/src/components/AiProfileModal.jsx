import React, {useState} from 'react'; import axios from 'axios';
export default function AiProfileModal({onClose,onSaved}){
  const [form,setForm] = useState({name:'My AI',provider:'openai',apiKey:'',system_prompt:'You are a helpful assistant.',temperature:0.7,visibility:'private'});
  const [status,setStatus] = useState('');
  async function save(){
    setStatus('Saving...');
    try{
      const r = await axios.post('http://localhost:3000/api/ai/profiles', form);
      setStatus('Saved.');
      onSaved && onSaved(r.data.id);
    }catch(e){ setStatus('Error: '+(e.response?.data?.error||e.message)); }
  }
  return (<div className='modal'>
    <h3>Create AI Profile</h3>
    <input className='input' placeholder='Name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
    <select className='input' value={form.provider} onChange={e=>setForm({...form,provider:e.target.value})}><option value='openai'>OpenAI</option><option value='gemini'>Gemini</option></select>
    <input className='input' placeholder='API Key' value={form.apiKey} onChange={e=>setForm({...form,apiKey:e.target.value})}/>
    <textarea className='input' placeholder='System prompt' value={form.system_prompt} onChange={e=>setForm({...form,system_prompt:e.target.value})}/>
    <div style={{display:'flex',gap:8,marginTop:8}}>
      <button className='button' onClick={save}>Save AI</button>
      <button className='button' onClick={onClose}>Cancel</button>
    </div>
    <div style={{marginTop:8}}>{status}</div>
  </div>);
}
