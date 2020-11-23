import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import Pokemons from './pages/Pokemons';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
    </div>
  );
}

export default App;
