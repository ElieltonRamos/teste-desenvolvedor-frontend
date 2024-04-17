import { useParams } from "react-router-dom";
import { Medicament } from "../types/medicament";
import { useEffect, useState } from "react";
import { API_URL } from "../App";

function MedicamentDetail() {
  const { id } = useParams();
  const [medicament, setMedicament] = useState<Medicament | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/data/${id}`)
      .then(response => response.json())
      .then(data => setMedicament(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!medicament) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>Detalhes do Medicamento</h1>

      <p>Nome: {medicament.name}</p>
      <p>Laboratorio: {medicament.company}</p>
      <p>Publicado em: {medicament.published_at}</p>
      <p>Principios Ativos: {medicament.active_principles.map((e) => (
        <span key={e.id}>{e.name}</span>
      ))}
      </p>
      <ul>
        {medicament.documents.map(element => (
          <li key={element.id}>
            <p>Tipo: {element.type}</p>
            <p>Expediente: {element.expedient}</p>
            <a href={element.url} target="_blank" rel="noopener noreferrer">Ver Documento</a>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default MedicamentDetail;