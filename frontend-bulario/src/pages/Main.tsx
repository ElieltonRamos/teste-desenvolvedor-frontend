import FilterMedicamentsName from "../components/FilterMedicamentsName";
import ListMedicaments from "../components/ListMedicaments";
import { Medicament } from "../types/medicament";

interface Props {
  dataMedicaments: Medicament[];
  setfilteredMedicaments: (medicaments: Medicament[]) => void;
  filteredMedicaments: Medicament[];
  itensPage: number;
}

function Main({ dataMedicaments, setfilteredMedicaments, filteredMedicaments, itensPage }: Props) {
  return (<main>
    <header>
      <h1>Bulario DotLib</h1>
    </header>
    <section className="container">
      <div className="box">
        <h2 className="title">Busque um medicamento</h2>
        <div className="containerForms">
          <FilterMedicamentsName
            dataMedicaments={dataMedicaments}
            setMedicaments={setfilteredMedicaments}
          />
        </div>
      </div>
    </section>
    <h2 className="title">Resultados</h2>
    <ListMedicaments listMedicaments={filteredMedicaments} itemsPerPage={itensPage} />
  </main>
  )
}

export default Main;