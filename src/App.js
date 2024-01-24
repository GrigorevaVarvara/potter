import './App.css';
import Cardlist from './components/cardlist/cardlist';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr></hr>
      <Cardlist/>
    </div>
  );
}

export default App;
