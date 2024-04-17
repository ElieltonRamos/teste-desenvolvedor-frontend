import { useEffect, useState } from "react"
import { Medicament } from "./types/medicament"
import ListMedicaments from "./components/ListMedicaments"
import FilterMedicamentsName from "./components/FilterMedicamentsName"

const API_URL = 'http://localhost:3000'

function App() {
  const [dataMedicaments, setDataMedicaments] = useState<Medicament[]>([])
  const [filteredMedicaments, setfilteredMedicaments] = useState<Medicament[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/data`);
      const data = await response.json();
      console.log(data.length);
      setDataMedicaments(data);
      setfilteredMedicaments(data);
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
          setMedicaments={setfilteredMedicaments}
        />
      </form>
      <h2>Resultados</h2>
      <ListMedicaments listMedicaments={filteredMedicaments} itemsPerPage={10} />
    </main>
  )
}

export default App
