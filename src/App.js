import { useState } from 'react';
import './App.css';
import Users from './Components/Users/Users';

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    < div className="App">
     <h2>is familiar : {familiar.toString()}</h2>
     <button onClick={() => setFamiliar(!familiar)}>Click</button>
     <Users familiar={familiar}></Users>
    </div>
  );
}

export default App;
