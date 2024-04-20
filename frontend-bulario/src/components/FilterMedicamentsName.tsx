/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Medicament } from "../types/medicament";
import filterMedicaments from "../utils/filterMedicaments";
import sortedMedicaments from "../utils/sortedMedicaments";
import InputSearch from "./InputSearch";

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
    <>

      <InputSearch
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Digite o nome..."
        value={searchName}
        textLabel="Busque pelo nome"
        />

      <InputSearch
        onChange={(e) => setSearchCompany(e.target.value)}
        placeholder="Digite o laboratorio..."
        value={searchCompany}
        textLabel="Busque pelo laboratorio"/>
        
    </>
  );
}

export default FilterMedicamentsName;