import { Medicament } from "../types/medicament";

function sortedMedicaments(medicaments: Medicament[]) {
  return medicaments.sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
}

export default sortedMedicaments;