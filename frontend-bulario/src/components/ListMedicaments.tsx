import { useEffect, useState } from "react";
import { Medicament } from "../types/medicament";
import PageNumbers from "./PageNumbers";
import RenderMedicaments from "./RenderMedicaments";

interface Props {
  listMedicaments: Medicament[];
  itemsPerPage: number;
}

function ListMedicaments({ listMedicaments, itemsPerPage }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [listMedicaments]);

  const pageNumbers = Array.from({ length: Math.ceil(listMedicaments.length / itemsPerPage) }, (_, index) => index + 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listMedicaments.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextPage = Number(event.currentTarget.id);
    setCurrentPage(nextPage);
  };


  return (
    <div>
      <ul className="listMedicaments">
        {<RenderMedicaments currentItems={currentItems} />}
      </ul>
      <ul>
        {<PageNumbers handleClick={handleClick} pageNumbers={pageNumbers} />}
      </ul>
    </div>
  );
}

export default ListMedicaments;
