import { Medicament } from "../types/medicament";

interface Props {
  currentItems: Medicament[];
}

function RenderMedicaments ({currentItems}: Props) {
  return currentItems.map((medicament) => {
    return <li key={medicament.id}>
      <p>{medicament.name}</p>
      <p>{medicament.company}</p>
    </li>;
  });
}

export default RenderMedicaments;