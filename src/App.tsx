import React from 'react';
import Feed from './page/Feed';
import Profile from './page/Profile';
import './global.css';
import Tasks from './page/Tasks';

function App () {

  return (
    
    <div className="container">
      <div className="content">
        <Profile />
        <Feed />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
