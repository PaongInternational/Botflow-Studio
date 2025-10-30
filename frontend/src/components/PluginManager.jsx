import React, {useState} from 'react'; import axios from 'axios';
export default function PluginManager({plugins, refresh}){
  const [repo, setRepo] = useState('');
  const [status, setStatus] = useState('');
  async function install(){
    setStatus('Installing...');
    try{
      const r = await axios.post('http://localhost:3000/api/plugins/install', { repo: repo.startsWith('http') ? repo : 'https://github.com/'+repo });
      setStatus('Installed: '+r.data.name);
      setRepo('');
      refresh && refresh();
    }catch(e){ setStatus('Error: '+(e.response?.data?.error||e.message)); }
  }
  async function remove(name){ if(!confirm('Remove plugin '+name+'?')) return; await axios.post('http://localhost:3000/api/plugins/remove',{name}); refresh&&refresh(); }
  async function activate(name,active){ await axios.post('http://localhost:3000/api/plugins/activate',{name,active}); refresh&&refresh(); }
  return (<div className='card'>
    <h3>Plugin Manager</h3>
    <input className='input' placeholder='owner/repo or full url' value={repo} onChange={e=>setRepo(e.target.value)} />
    <button className='button' onClick={install}>Install from GitHub</button>
    <div style={{marginTop:10}}>{status}</div>
    <hr/>
    <h4>Installed</h4>
    <ul>{(plugins||[]).map(p=>(
      <li key={p.name} style={{marginBottom:8}}>
        <strong>{p.name}</strong> — {p.repo}
        <div style={{marginTop:6}}>
          <button className='button' onClick={()=>activate(p.name, p.active?0:1)}>{p.active? 'Deactivate':'Activate'}</button>
          <button style={{marginLeft:8}} onClick={()=>remove(p.name)}>Remove</button>
        </div>
      </li>
    ))}</ul>
  </div>);
}
