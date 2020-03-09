import React from 'react';
import { CountryList } from '../CountryList/CountryList'
import './Country.css';

export const Country = ({ data, periodValue }) => {
  const city = data.map( (region) => {
    // перебираем все города
    const cities = region.areas.map((city, index) => {
      // перебираем все месяцы 
      const payment = city.payments.map(payment => {
        // складываем все результаты месяцев для каждого города в allYearPeriod
        const allYearPeriod = Object.keys( payment ).reduce( ( sum, key ) => {
          return sum + parseFloat( payment[key] );
        }, 0 );
        
        return <CountryList key={index}  city={city} payment={payment} periodValue={periodValue} allYearPeriod={allYearPeriod} /> 
      });
      return payment;
    });
     return cities;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl col-lg">
          <div className="card city__card">
            <ul className="list-group list-group-flush city__card-list">
              {city}
            </ul>
          </div>
        </div>
      </div>
    </div>
 );
}