import { Medicament } from "../types/medicament";

interface Props {
  listMedicaments: Medicament[];
}

function ListMedicaments({ listMedicaments }: Props) {
  return (
    <ul>
      {listMedicaments.map((medicament) => (
        <li key={medicament.id}>
          <h3>{medicament.name}</h3>
          <p>{medicament.company}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListMedicaments;
