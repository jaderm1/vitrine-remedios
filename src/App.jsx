
import './App.css'

import { MedicamentosContext } from './context/MedicamentosContext'

import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'

import Header from './components/Header'
import Card from './components/Card'

import { useState, useContext } from 'react'

function App() {
  const {listaMedicamentos} = useContext(MedicamentosContext)  


  return (
    <>
       <Header />
         <FormularioNovoMedicamento />
        {listaMedicamentos.map(medicamento => (
        <Card medicamento={medicamento} style="display:flex" />
))}
    </>
  )
}

export default App
