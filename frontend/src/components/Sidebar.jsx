import React from 'react';
export default function Sidebar({onToggleTheme, onLogout}){
  return (<div className='sidebar'>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="https://cdn.yupra.my.id/yp/qm656enk.jpg" className="logo-img" alt="logo"/>
        <div><div className='app-title'>BotFlow Studio</div><div className='small-muted'>n8n-like • Plugin Hub</div></div>
      </div>
      <div style={{display:'flex',gap:8}}>
        <button className='nav-btn' onClick={onToggleTheme}>Theme</button>
        <button className='nav-btn' onClick={onLogout}>Logout</button>
      </div>
    </div>
    <div style={{marginTop:12}}>
      <button className='button' style={{width:'100%',marginBottom:8}}>Dashboard</button>
      <button className='button' style={{width:'100%',marginBottom:8}}>Flows</button>
      <button className='button' style={{width:'100%',marginBottom:8}}>Plugins</button>
      <button className='button' style={{width:'100%',marginBottom:8}}>AI Profiles</button>
      <button className='button' style={{width:'100%',marginBottom:8}}>Settings</button>
    </div>
    <div style={{marginTop:'auto'}} className='small-muted'>Credit: Paong & Evelyn</div>
  </div>);
}