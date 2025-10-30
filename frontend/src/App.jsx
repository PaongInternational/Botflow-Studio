import React, {useState, useEffect} from 'react'; import axios from 'axios'; import PluginManager from './components/PluginManager'; import AiProfileModal from './components/AiProfileModal'; import Loading from './components/Loading'; import Login from './components/Login'; import Sidebar from './components/Sidebar';
export default function App(){
  const [showAi,setShowAi] = useState(false);
  const [plugins,setPlugins] = useState([]);
  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null);
  useEffect(()=>{ // simulate initial loading
    setTimeout(()=>{ setLoading(false); load(); }, 800);
  },[]);
  async function load(){ try{ const p = await axios.get('http://localhost:3000/api/plugins'); setPlugins(p.data.plugins||[]); }catch(e){ setPlugins([]); } }
  function handleLogin(u){ setUser(u); }
  function handleLogout(){ setUser(null); }
  return (<div>{loading && <Loading/>}{!loading && !user && <Login onLogin={handleLogin}/>}{!loading && user && <div className='app'><Sidebar onToggleTheme={()=>alert('theme toggle')} onLogout={handleLogout}/><div className='content'><div className='header card'><div className='logo-row'><img src='https://cdn.yupra.my.id/yp/qm656enk.jpg' className='logo-img' alt='logo'/><div><div className='app-title'>BotFlow Studio</div><div className='small-muted'>Welcome, {user.user}</div></div></div></div><PluginManager plugins={plugins} refresh={load}/> {showAi && <AiProfileModal onClose={()=>setShowAi(false)} onSaved={()=>{ setShowAi(false); load(); }} />}</div></div>}</div>);
}