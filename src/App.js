import './App.css';
// import countriesJSON from './countries.json'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useState, useEffect } from 'react';




function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setPosts(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList countries={posts} />} />
        <Route path='/:idCode' element={<CountryDetails countries={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
