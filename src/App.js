import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";


function App() {
  var [data, setData] = useState();

  useEffect( async () => {
    let xx= await fetch('https://api.covid19api.com/summary')
        .then(response => response.json());
    setData(xx.Countries);
 }, []);
 

  return (
    <>
    {data && data.map(item => (
      item.CountryCode == "VN" ? (
        <li key={item.id}>
          <h2>Country: {item.Country}</h2>
          <p>TotalConfirmed: {item.TotalConfirmed}</p>
          <p>TotalDeaths: {item.TotalDeaths}</p>
          <p>Date: {item.Date}</p>
        </li>
        ) : (
            <p></p>
          )
              
      ))}
    </> 
  );
}

export default App;
