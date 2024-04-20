import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import MedicamentDetail from "./pages/MedicamentDetail"

export const API_URL = 'http://localhost:3000'
export const ITENS_PAGE = 10

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main itensPage={ITENS_PAGE} API_URL={API_URL}/>} />
        <Route path="/medicament/:id" element={<MedicamentDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
