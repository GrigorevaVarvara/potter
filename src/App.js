import { useState } from 'react';
import './App.css';
import Cardlist from './components/cardlist/cardlist';
import Header from './components/header/header';
import Hermione from './assets/img/pic1.png'
import Malfoy from './assets/img/pic2.png'
import Potter from './assets/img/pic3.jpg'

function App() {

  const[cards, setCards] = useState([
    {
      img: Hermione,
      name: "Hermione Granger",
      actor:"Emma Watson",
      gender: "female",
      house:"Gryffindor",
      wand:"dragon heartstring",
      alive: true
    },
    {
      img: Malfoy,
      name: "Draco Malfoy",
      actor:"Tom Felton",
      gender: "male",
      house:"Slytherin",
      wand:"unicorn tail-hair",
      alive: true
    },
    {
      img: Potter,
      name: "Harry Potter",
      actor:"Daniel Redcliffe",
      gender: "male",
      house:"Griffindor",
      wand:"unicorn tail-hair",
      alive: true
    }
  ]);

  const[schools,setSchools] = useState([
    {name:"Гриффиндор"},
    {name:"Слизерин"},
    {name:"Когтевран"},
    {name:"Пуффендуй"},
  ])


  return (
    <div className="App">
      <Header schools={schools}/>
      <hr></hr>
      <Cardlist cards={cards}/>
    </div>
  );
}

export default App;
