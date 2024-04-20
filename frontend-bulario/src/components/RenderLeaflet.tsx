import { Document } from "../types/medicament";
import downloadFile from "../utils/downloadFile";

function RenderLeaflet({leaflets}: {leaflets: Document[]}) {
  return (
    <div className="containerBula">{leaflets.map(leaflet => (
      <div key={leaflet.id}>
        <p className="message">Tipo:
          <br />
          {leaflet.type}
        </p>
        <p className="message">Expediente: {leaflet.expedient}</p>
        <div className="actions">
          <button className="history" onClick={() => downloadFile(leaflet.url, 'pdf_sample.pdf')}>Download</button>
          <a className="history" href={leaflet.url} target="_blank" rel="noopener noreferrer">Visualizar</a>
        </div>
      </div>
    ))}
    </div >
  )
}

export default RenderLeaflet;