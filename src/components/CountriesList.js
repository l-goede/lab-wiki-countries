import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await axios.get('https://restcountries.com/v3.1/all');

      setCountries(response.data);
    }
    getData();
  }, []);

  if (!countries.length) {
    return <p>Loading countries...</p>;
  }
  return (
    <div>
      {countries.map((elem) => {
        return (
          <div className="flx-clm">
            <img className="flx-item flagLink" src={elem.flags.svg} alt="" />
            <Link className="flx-item" to={`/${elem.cca3}`}>
              {elem.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
