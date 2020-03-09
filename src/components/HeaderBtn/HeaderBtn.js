import React from 'react';
import './HeaderBtn.css';

export const HeaderBtn = ({ data, value, periodValue, options, handleSelectRegionChange, handleSelectPeriodChange }) => {
  // передаем в option значения округов
  const selectItem = data.map( (items) => {
    console.log(items)
    return <option key={items.id} value={items.id}>{items.name}</option>
  });
  // передаем в option значения месяцев
  const optionsValue = options.map( (option) => { 
    return <option key={option.id} value={option.name}>{option.name}</option>;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl col-lg">
          <div className="region d-flex justify-content-between">

            <select className="custom-select region__select" onChange={handleSelectRegionChange}>
              <option value={value} hidden>Все регионы</option>
              {selectItem}
            </select>

            <select className="custom-select region__select" onChange={handleSelectPeriodChange}>
              <option value={periodValue} hidden>Период</option>
              {optionsValue}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}