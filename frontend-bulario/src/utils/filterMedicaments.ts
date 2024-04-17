import { Medicament } from "../types/medicament";
import formatInputString from "./formatString";

function filterMedicaments(listMedicaments: Medicament[], searchName: string, searchCompany: string) {
  return listMedicaments.filter((medicament) => {
    const nameInDataBase = formatInputString(medicament.name);
    const nameInput = formatInputString(searchName);
    const companyInDataBase = formatInputString(medicament.company);
    const companyInput = formatInputString(searchCompany);

    if (searchName !== '' && searchCompany !== '') {
      return nameInDataBase.includes(nameInput) &&
            companyInDataBase.toLowerCase().includes(companyInput);
    } else if (searchName !== '') {
      return nameInDataBase.toLowerCase().includes(nameInput);
    } else if (searchCompany !== '') {
      return companyInDataBase.toLowerCase().includes(companyInput);
    }
    return true;
  });
}

export default filterMedicaments;