import { useNavigate } from "react-router-dom";
import { Medicament } from "../types/medicament";

interface Props {
  currentItems: Medicament[];
}

function RenderMedicaments({ currentItems }: Props) {
  const navigate = useNavigate()

  return currentItems.map((medicament) => {
    return (<div className="card">
    <div className="medicamentContainer">
    </div>

    <div className="card-header">
      <span>{medicament.name}<br /></span>
      <span>{medicament.company}</span>
    </div>

    <div className="temp-scale">
      <button onClick={() => navigate(`/data/${medicament.id}`)}>Ver Detalhes</button>
    </div>
  </div>);
  });
}

export default RenderMedicaments;