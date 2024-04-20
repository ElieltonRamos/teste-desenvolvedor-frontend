import { useState } from "react";

type Props = {
  pageNumbers: number[];
  handleClick: (nextpage: number) => void;
}

function PageNumbers({ pageNumbers, handleClick }: Props) {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setSelectedPage(pageNumber);
    handleClick(pageNumber);
  };

  return (
    <div className="radio-input" style={{ '--page_count': pageNumbers.length, '--selected_page': selectedPage } as React.CSSProperties}>
      {pageNumbers.map((page, index) => (
        <label className={selectedPage === page ? 'pageSelection' : ''} key={index}>
          <input
            type="radio"
            name="page-radio"
            value={page}
            id={`value-${page}`}
            checked={selectedPage === page}
            onChange={() => handlePageChange(page)}
          />
          <span>{page}</span>
        </label>
      ))}
    </div>
  );
}

export default PageNumbers;