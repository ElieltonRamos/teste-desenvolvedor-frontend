/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Medicament } from "../types/medicament";
import filterMedicaments from "../utils/filterMedicaments";
import sortedMedicaments from "../utils/sortedMedicaments";

type PropFilterMedicamentsName = {
  dataMedicaments: Medicament[];
  setMedicaments: (data: Medicament[]) => void;
};

function FilterMedicamentsName({ dataMedicaments, setMedicaments }: PropFilterMedicamentsName) {
  const [searchCompany, setSearchCompany] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const filteredData = filterMedicaments(dataMedicaments, searchName, searchCompany);
    const ordenedMedicaments = sortedMedicaments(filteredData);
    setMedicaments(ordenedMedicaments);
  }, [searchName, searchCompany]);

  return (
    <div>
      <h4>Busque pelo nome</h4>
      <input
        type="text"
        placeholder="Procure o nome do Medicamento..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)} />
      <h4>Busque pelo laboratorio</h4>
      <input
        type="text"
        placeholder="Procure o laboratorio do Medicamento..."
        value={searchCompany}
        onChange={(e) => setSearchCompany(e.target.value)} />
    </div>
  );
}

export default FilterMedicamentsName;