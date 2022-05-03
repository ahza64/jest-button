import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newbuttonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button
        style={{backgroundColor: disabled ? 'grey' : buttonColor}}
        onClick={() => setButtonColor(newbuttonColor)}
        disabled={disabled}
      >
        Change to {newbuttonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable color button</label>
    </div>
  );
}

export default App;
