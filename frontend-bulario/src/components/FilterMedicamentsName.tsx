import { useEffect} from "react";
import { Medicament } from "../types/medicament";

type PropFilterMedicamentsName = {
  dataMedicaments: Medicament[];
  setMedicaments: (data: Medicament[]) => void;
  search: string;
  setSearch: (search: string) => void;
};

function FilterMedicamentsName({ dataMedicaments, setMedicaments, search, setSearch }: PropFilterMedicamentsName) {

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = dataMedicaments.filter((medicament) => {
        return medicament.name.toLowerCase().includes(search.toLowerCase());
      });
      setMedicaments(filteredData);
    };
    fetchData();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
  );
}

export default FilterMedicamentsName;