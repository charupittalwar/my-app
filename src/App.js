import logo from './logo.svg';
import './App.css';

import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';

function App() {
  return (
    <div>
    <h1 id ="c1">first project 1</h1>

    <h2>first project 2</h2>

    
    <Add  a="2" b = "3"></Add>
    <Sub c="5" d="8" />
        
  </div>
  );
}

export default App;
