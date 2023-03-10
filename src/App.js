import './App.css';
import { React, useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
import axios from 'axios';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({data}) => {
        setCountries(data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div>
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
