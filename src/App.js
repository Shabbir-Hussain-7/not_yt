import './App.css';
import React from 'react';
import SearchResults from './SearchResults.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play from './Play.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import { useGlobalContext } from './context';

function App() {
  const { isAuthenticated } = useGlobalContext();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route exact path="/search/:searchTerm" element={isAuthenticated ? <SearchResults /> : <Login />} />
          <Route path="/play/:videoId" element={isAuthenticated ? <Play /> : <Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
