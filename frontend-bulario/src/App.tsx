import { useEffect, useState } from "react"
import { Medicament } from "./types/medicament"
import ListMedicaments from "./components/ListMedicaments"
import FilterMedicamentsName from "./components/FilterMedicamentsName"

const API_URL = 'http://localhost:3000'

function App() {
  const [listMedicaments, setListMedicaments] = useState<Medicament[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/data`);
      const data = await response.json();
      setListMedicaments(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <header>
        <h1>Bulario DotLib</h1>
      </header>
      <section>
        <h2>Busque um medicamento</h2>
        <form>
          <FilterMedicamentsName dataMedicaments={listMedicaments} setMedicaments={setListMedicaments}  search={search} setSearch={setSearch}/>
          <button type="submit">Buscar</button>
        </form>
      </section>
      <section>
        <h2>Resultados</h2>
        <ListMedicaments listMedicaments={listMedicaments} />
      </section>
    </main>
  )
}

export default App
