import { Document } from "../types/medicament";
import downloadFile from "../utils/downloadFile";

function RenderLeaflet({leaflet}: {leaflet: Document[]}) {
  return (
    <div className="containerBula">{leaflet.map(element => (
      <div key={element.id}>
        <p className="message">Tipo:
          <br />
          {element.type}
        </p>
        <p className="message">Expediente: {element.expedient}</p>
        <div className="actions">
          <button className="history" onClick={() => downloadFile(element.url, 'pdf_sample.pdf')}>Download</button>
          <a className="history" href={element.url} target="_blank" rel="noopener noreferrer">Visualizar</a>
        </div>
      </div>
    ))}
    </div >
  )
}

export default RenderLeaflet;