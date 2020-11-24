import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import Pokemons from './pages/Pokemons';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainMenu />
      <Pokemons />
      <Footer />
    </div>
  );
}

export default App;
