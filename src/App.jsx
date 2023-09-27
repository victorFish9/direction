import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matka from './components/Matka'

function App() {

  const [matka, setMatka] = useState({
    kohdemaa: '',
    kesto: ''
  });

  const [matkat, setMatkat] = useState([]);

  const inputChanged = (event) => {
    setMatka({ ...matka, [event.target.name]: event.target.value });

  }
  const addMatka = (event) => {
    event.preventDefault();

    console.log("insert new matka to matkat array");
    setMatkat([...matkat, matka]);
  }

  const deleteByIndex = (index) => {
    console.log(index);
    setMatkat(matkat.filter((matka, i) => i !== index));
  }

  return (
    <>
      <h2>Matka App</h2>
      <form onSubmit={addMatka}>
        <p> <label>Kohdemaa </label><input
          type="text"
          name="kohdemaa"
          value={matka.kohdemaa}
          onChange={inputChanged} /></p>
        <p><label>Kesto (päivinä) </label><input
          type="text"
          name="kesto"
          value={matka.kesto}
          onChange={inputChanged} /></p>

        <input type="submit" value="lisaa" />

      </form>

      <Matka matkat={matkat} onDelete={deleteByIndex} />

    </>
  )
}

export default App
