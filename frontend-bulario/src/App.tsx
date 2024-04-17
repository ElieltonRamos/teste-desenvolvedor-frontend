import { useEffect, useState } from "react"
import { Medicament } from "./types/medicament"
import ListMedicaments from "./components/ListMedicaments"
import FilterMedicamentsName from "./components/FilterMedicamentsName"

const API_URL = 'http://localhost:3000'

function App() {
  const [dataMedicaments, setDataMedicaments] = useState<Medicament[]>([])
  const [listMedicaments, setListMedicaments] = useState<Medicament[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/data`);
      const data = await response.json();
      console.log(data.map((medicament: Medicament) => medicament.published_at));
      setDataMedicaments(data);
      setListMedicaments(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <header>
        <h1>Bulario DotLib</h1>
      </header>
      <h2>Busque um medicamento</h2>
      <form>
        <FilterMedicamentsName
          dataMedicaments={dataMedicaments}
          setMedicaments={setListMedicaments}
        />
      </form>
      <h2>Resultados</h2>
      <ListMedicaments listMedicaments={listMedicaments} />
    </main>
  )
}

export default App
