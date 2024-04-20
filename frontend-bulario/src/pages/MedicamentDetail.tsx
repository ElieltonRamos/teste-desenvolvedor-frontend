import { useNavigate, useParams } from "react-router-dom";
import { Medicament } from "../types/medicament";
import { useEffect, useState } from "react";
import { API_URL } from "../App";
import downloadFile from "../utils/downloadFile";

function MedicamentDetail() {
  const { id } = useParams();
  const [medicament, setMedicament] = useState<Medicament | null>(null);
  const navigate = useNavigate()

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
          <p className="message">Principios Ativos:
            {medicament.active_principles.map((e) => (<p key={e.id}>{e.name}</p>))}
          </p>
        </div>
        <div className="contentBule">
          <p className="detailTitle">Bulas Disponiveis:</p>
          <div className="containerBula">{medicament.documents.map(element => (
            <p key={element.id}>
              <p className="message">Tipo:
                <br />
                {element.type}
              </p>
              <p className="message">Expediente: {element.expedient}</p>
              <div className="actions">
                <button className="history" onClick={() => downloadFile(element.url, 'pdf_sample.pdf')}>Download</button>
                <a className="history" href={element.url} target="_blank" rel="noopener noreferrer">Visualizar</a>
              </div>
            </p>
          ))}</div >
        </div>
      </div>
      <button className="history return" onClick={() => navigate('/')}>Voltar para Pesquisa</button>
    </main>
  )
}

export default MedicamentDetail;