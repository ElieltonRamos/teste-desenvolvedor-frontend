import { useParams } from "react-router-dom";
import { Medicament } from "../types/medicament";
import { useEffect, useState } from "react";
import { API_URL } from "../App";
import JsFileDownloader from 'js-file-downloader';

function MedicamentDetail() {
  const { id } = useParams();
  const [medicament, setMedicament] = useState<Medicament | null>(null);

  const downloadFile = (url: string, fileName: string) => {
    fetch(url, { mode: 'no-cors' })
      .then(response => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        new JsFileDownloader({
          url: blobUrl,
          filename: fileName
        })
      })
      .then(() => window.alert('Download concluído!'))
      .catch(() => window.alert('Erro ao baixar o arquivo!'));
  };

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
            <button onClick={() => downloadFile(element.url, 'pdf_sample.pdf')}>Download</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default MedicamentDetail;