import React, { Component, Fragment } from 'react';
import { HeaderBtn } from '../HeaderBtn/HeaderBtn';
import { Country } from '../Country/Country';

import region from '../../region.json'; 
import './App.css';

class App extends Component {
  state = {
    data: region.data,
    value: 'all',
    periodValue: 'period',
    options: [
      { "id": 1, "name":  "Январь", "value": "jan" }, { "id": 2, "name":  "Февраль", "value": "feb"}, { "id": 3, "name":  "Март", "value": "march" },
      { "id": 4, "name":  "Апрель", "value": "april" }, { "id": 5, "name":  "Май", "value": "may" },  { "id": 6, "name":  "Июнь", "value": "june" },
      { "id": 7, "name":  "Июль", "value": "july"}, { "id": 8, "name":  "Август", "value": "aug" }, { "id": 9, "name":  "Сентябрь", "value": "sept" },
      { "id": 10, "name":  "Октябрь", "value": "oct"}, { "id": 11, "name":  "Ноябрь", "value": "nov" }, { "id": 12, "name":  "Декабрь", "value": "dec" }]
  }

  // фильтрация по выбранному округу в select 
  filterSelectRegionOption(arr, value) {
    switch(value) {
      case 'all': return arr;
      case 'cfo': return arr.filter(region => region.id === 'cfo'); 
      case 'ufo': return arr.filter(region => region.id === 'ufo'); 
      case 'nwfo': return arr.filter(region => region.id === 'nwfo'); 
      case 'efo': return arr.filter(region => region.id === 'efo'); 
      case 'sibirskiyfo': return arr.filter(region => region.id === 'sibirskiyfo'); 
      case 'uralfo': return arr.filter(region => region.id === 'uralfo'); 
      case 'privolzhskiyfo': return arr.filter(region => region.id === 'privolzhskiyfo'); 
      case 'nkfo': return arr.filter(region => region.id === 'nkfo'); 
      default: return arr;
    }
  }
  
  handleSelectRegionChange = (event) => {
    this.setState({ value: event.target.value })}

  handleSelectPeriodChange = (event) => {
    this.setState({ periodValue: event.target.value })}

  render() {
    const { data, value, periodValue, options } = this.state;
    const visibleCountry = this.filterSelectRegionOption(data, value);
    
    return (
      <Fragment>
        <HeaderBtn 
          data={data}
          options={options}
          value={value} 
          periodValue={periodValue}
          handleSelectRegionChange={this.handleSelectRegionChange}
          handleSelectPeriodChange={this.handleSelectPeriodChange}
        />

        <Country 
          data={visibleCountry}
          periodValue={periodValue}
        /> 
      </Fragment>
   );
  }
}
export default App;