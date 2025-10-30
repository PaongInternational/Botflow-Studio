import React, {useState} from 'react';
export default function Login({onLogin}){
  const [user,setUser]=useState('');
  const [pass,setPass]=useState('');
  function submit(e){ e.preventDefault(); if(!user) return alert('Enter username'); onLogin({user}); }
  return (<div className="login-wrap"><form className="login-box" onSubmit={submit}>
    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}><img src="https://cdn.yupra.my.id/yp/qm656enk.jpg" className="logo-img" alt="logo"/><div><div className="app-title">BotFlow Studio</div><div className="small-muted">Login to manage your bots & plugins</div></div></div>
    <input className="input" placeholder="Username or email" value={user} onChange={e=>setUser(e.target.value)} />
    <input className="input" placeholder="Password (demo)" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <button className="button" type="submit">Sign in</button>
      <button type="button" className="nav-btn" onClick={()=>alert('Use GitHub OAuth (coming soon)')}>Sign in with GitHub</button>
    </div>
  </form></div>);
}