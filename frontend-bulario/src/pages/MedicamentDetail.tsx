import { useParams } from "react-router-dom";

function MedicamentDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Medicament Detail</h1>
      <p>Medicament ID: {id}</p>
    </div>
  )
}

export default MedicamentDetail;