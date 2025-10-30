import React from 'react';
export default function Loading(){ return (
  <div className="loading-screen">
    <div className="spinner" />
    <div style={{textAlign:'center'}}>
      <div style={{fontSize:18,fontWeight:700}}>BotFlow Studio</div>
      <div className="small-muted">Preparing the environment — installing dependencies may take a while on first run.</div>
    </div>
  </div>
);}