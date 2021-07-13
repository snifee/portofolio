import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <div className="content">

            <Home/>

      </div>
    </div>

  );
}

export default App;
