import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
// import './components/Person/Person.css'

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

function LoadCountries() {
  // const [countries, setCountries] = useState([])
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then(response => response.json())
  //     .then(data => setCountries(data))
  // }, [])
  return (
    <div>
      {/* <h1>World Tour</h1>
      <h3>Total Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      } */}

      {/* from components folder */}
      {/* <Countries></Countries>
      <Person></Person> */}
    </div>
  )
}

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Population: {props.population}</h3>
//     </div>
//   )
// }

export default App;
