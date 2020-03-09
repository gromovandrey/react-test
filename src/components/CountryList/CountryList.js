import React from 'react';
import './CountryList.css';

export const CountryList = ({ city, payment, periodValue, allYearPeriod }) => {
  return(
    <li className="city"> 
      <strong>Область(Респ):</strong> {city.name} <br/> 
      <strong>Окато:</strong> {city.okato} <br/> 
      { periodValue === 'period' ? 
          <strong>Начис/к опл за год: <span>{allYearPeriod}&#8381;</span> </strong> :
          <strong>Начис/к опл за {periodValue}: <span>{payment[periodValue]}&#8381;</span> </strong>
      }
    </li>
  );
}