import { useNavigate, useParams } from "react-router-dom";
import { Medicament } from "../types/medicament";
import { useEffect, useState } from "react";
import { API_URL } from "../App";
import alertError from "../utils/alertError";
import RenderLeaflet from "../components/RenderLeaflet";

function MedicamentDetail() {
  const { id } = useParams();
  const [medicament, setMedicament] = useState<Medicament | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API_URL}/data/${id}`)
      .then(response => response.json())
      .then(data => setMedicament(data))
      .catch(err => {
        console.log(err);
        alertError("Ocorreu um erro de conexão com o servidor.");
      });
  }, [id]);

  if (!medicament) {
    return <p>Carregando...</p>
  }

  return (
    <main>
      <header>
        <h1 className="title">Detalhes do Medicamento</h1>
      </header>
      <div className="containerDetail shadow">
        <div className="contentBule">
          <p className="detailTitle">{medicament.name}</p>
          <p className="detailTitle">{medicament.company}</p>
          <p className="message">Publicado em:
            <br />
            {medicament.published_at}
          </p>
          <div className="message">Principios Ativos:
            {medicament.active_principles.map((e) => (<p key={e.id}>{e.name}</p>))}
          </div>
        </div>
        <div className="contentBule">
          <p className="detailTitle">Bulas Disponiveis:</p>
          <RenderLeaflet leaflets={medicament.documents} />
        </div>
      </div>
      <button className="history return" onClick={() => navigate('/')}>Voltar para Pesquisa</button>
    </main>
  )
}

export default MedicamentDetail;