import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newbuttonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button style={{backgroundColor: buttonColor}} onClick={() => setButtonColor(newbuttonColor)}>Change to {newbuttonColor}</button>
    </div>
  );
}

export default App;
