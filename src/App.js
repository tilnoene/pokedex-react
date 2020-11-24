import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PokemonInfo from './pages/PokemonInfo';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/pokemons" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/perfil" exact>
          <Profile />
        </Route>
        <Route exact path="/pokemons/:name">
          <PokemonInfo />
        </Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
