import { useEffect, useState } from "react"
import { Medicament } from "./types/medicament"

const API_URL = 'http://localhost:3000'

function App() {
  const [listMedicaments, setListMedicaments] = useState<Medicament[]>([])
  console.log(listMedicaments)

  useEffect(() => {
    fetch(`${API_URL}/data`)
      .then((response) => response.json())
      .then((data) => setListMedicaments(data))
  }, [])

  return (
    <main>
      <header>
        <h1>Bulario DotLib</h1>
      </header>
      <section>
        <h2>Busque um medicamento</h2>
        <form>
          <input type="text" placeholder="Nome do medicamento" />
          <button type="submit">Buscar</button>
        </form>
      </section>
      <section>
        <h2>Resultados</h2>
        <ul>
          {listMedicaments.map((medicament) => (
            <li key={medicament.id}>
              <h3>{medicament.name}</h3>
              <p>{medicament.company}</p>
            </li>))}
        </ul>
      </section>
    </main>
  )
}

export default App
