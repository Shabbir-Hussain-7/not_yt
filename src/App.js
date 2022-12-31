import './App.css';
import SearchBar from './SearchBar.jsx';
import React from 'react';
import SearchResults from './SearchResults.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play from './Play.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <h1>YouTube Search</h1>
        <SearchBar />
        <Routes>
          <Route path="/search/:searchTerm" element={<SearchResults />} />  
          <Route path="/play/:videoId" element={<Play />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
