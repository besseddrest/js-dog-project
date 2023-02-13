import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header'
import { Card } from './Components/Card/Card';
import { useEffect, useState } from 'react';

function App() {
  const [dogList, setDogList] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const fetchDogs = await fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(res => { 
          const dogs = Object.keys(res.message).map(item => item).slice(0, 5);
          return dogs; 
        });
      setDogList(fetchDogs);
      console.log(dogList);
    }

    fetchData();

  }, []);

  return (
    <div className="App">
      <Header />
      <div className="dogs">
            { 
              dogList.map((item, i) => <Card name={ item } key={ i } />)
            }
      </div>
    </div>
  );
}

export default App;
