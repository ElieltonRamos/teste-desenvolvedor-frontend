import { useState, useEffect } from "react";
import FilterMedicamentsName from "../components/FilterMedicamentsName";
import ListMedicaments from "../components/ListMedicaments";
import { Medicament } from "../types/medicament";
import alertError from "../utils/alertError";

function Main({ itensPage, API_URL }: { itensPage: number, API_URL: string }) {
  const [dataMedicaments, setDataMedicaments] = useState<Medicament[]>([])
  const [filteredMedicaments, setfilteredMedicaments] = useState<Medicament[]>([])

  useEffect(() => {
    fetch(`${API_URL}/data`)
      .then(response => response.json())
      .then(data => {
        setDataMedicaments(data);
        setfilteredMedicaments(data)
      })
      .catch(error => {
        console.log(error.message);
        alertError("Ocorreu um erro de conexão com o servidor.")
      })
  }, [API_URL]);

  return (
    <>
      <header>
        <h1>Bulario DotLib</h1>
      </header>
      <main>
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
    </>
  )
}

export default Main;