import { useState } from 'react'

import './App.css'

import { MedicamentosContextProvider } from './context/MedicamentosContext'


import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'

import Header from './components/Header'

function App() {

  return (
    <>
       <Header />
      <MedicamentosContextProvider>
     
        <FormularioNovoMedicamento />

      </MedicamentosContextProvider>
    </>
  )
}

export default App
