import { useEffect, useState } from "react"
import { Medicament } from "./types/medicament"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import MedicamentDetail from "./pages/MedicamentDetail"

const API_URL = 'http://localhost:3000'

function App() {
  const [dataMedicaments, setDataMedicaments] = useState<Medicament[]>([])
  const [filteredMedicaments, setfilteredMedicaments] = useState<Medicament[]>([])

  useEffect(() => {
    fetch(`${API_URL}/data`)
      .then(response => response.json())
      .then(data => {
        setDataMedicaments(data);
        setfilteredMedicaments(data);
      })
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main dataMedicaments={dataMedicaments} setfilteredMedicaments={setfilteredMedicaments} filteredMedicaments={filteredMedicaments} itensPage={10} />} />
        <Route path="/medicament/:id" element={<MedicamentDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
