import FilterMedicamentsName from "../components/FilterMedicamentsName";
import ListMedicaments from "../components/ListMedicaments";
import { Medicament } from "../types/medicament";

interface Props {
  dataMedicaments: Medicament[];
  setfilteredMedicaments: (medicaments: Medicament[]) => void;
  filteredMedicaments: Medicament[];
  itensPage: number;
}
function Main({dataMedicaments, setfilteredMedicaments, filteredMedicaments, itensPage}: Props) {
  return (<main>
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
      <ListMedicaments listMedicaments={filteredMedicaments} itemsPerPage={itensPage} />
    </main>
)}

export default Main;