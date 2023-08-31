import React from 'react';
import MainHeader from './components/MainHeader';
import Bg from './components/Bg.jsx';
import Search from './components/Search';

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black to-slate-800  ">
      <MainHeader />
      <Search />
      <Bg />
    </div>
  );
}

export default App;
