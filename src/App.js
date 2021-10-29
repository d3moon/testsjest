import React, { useState } from 'react'
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log(typeof Dropdown)
  return (
  <>
  {selectedPokemon && <div>Seu Pokemon: {selectedPokemon}</div>}
  
  <Dropdown 
  title="Selecione seu Pokemon Inicial" 
  options={['Zubat', 'Spearow', 'Nidoran']}
  onSelect={setSelectedPokemon}
  />
  </>
  )
}

export default App;