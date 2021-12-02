import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `https://restcountries.com/v3.1/all/${id}`
      );
      console.log(response);

      let country = {
        image: response.data[0].flags.svg,
        name: response.data[0].name.common,
        capital: response.data[0].capital,
        area: response.data[0].area,
      };
      setDetail(country);
    }
    getData();
  }, [id]);

  if (!detail) {
    return <p>Loading detail page...</p>;
  }
  console.log(detail);
  return (
    <div>
      <h1>Detail Page</h1>
      <img src={detail.image} alt="" />
      <h1>{detail.name}</h1>
      <p>Capital: {detail.capital}</p>
      <p>Area: {detail.area}</p>
    </div>
  );
}

export default CountryDetails;
