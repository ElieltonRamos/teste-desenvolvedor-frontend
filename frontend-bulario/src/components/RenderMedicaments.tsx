import { Link } from "react-router-dom";
import { Medicament } from "../types/medicament";

interface Props {
  currentItems: Medicament[];
}

function RenderMedicaments({ currentItems }: Props) {
  return currentItems.map((medicament) => {
    return <li key={medicament.id}>
      <Link to={`/medicament/${medicament.id}`}>
        <p>{medicament.name}</p>
        <p>{medicament.company}</p>
      </Link>
    </li>;
  });
}

export default RenderMedicaments;