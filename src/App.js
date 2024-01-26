import { useEffect, useState } from 'react';
import './App.css';
import Cardlist from './components/cardlist/cardlist';
import Header from './components/header/header';
import Hermione from './assets/img/pic1.png'
import Malfoy from './assets/img/pic2.png'
import Potter from './assets/img/pic3.jpg'
import axios from 'axios';

function App() {

  const[cards, setCards] = useState([
    
  ]);

  const[schools,setSchools] = useState([
    {name:"Гриффиндор"},
    {name:"Слизерин"},
    {name:"Когтевран"},
    {name:"Пуффендуй"},
  ])

  useEffect(()=>{

    axios.get('http://localhost:3001/schools').then((data)=>{
      setSchools(data.data);
    });

    axios.get('http://localhost:3001/heroes').then((data)=>{
      setCards(data.data);
    });

  }, [])

  return (
    <div className="App">
      <Header schools={schools}/>
      <hr></hr>
      <Cardlist cards={cards}/>
    </div>
  );
}

export default App;
