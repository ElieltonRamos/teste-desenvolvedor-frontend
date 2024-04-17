type Props = {
  pageNumbers: number[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function PageNumbers({ pageNumbers, handleClick }: Props) {
  return pageNumbers.map(number => {
    return (
      <button
        key={number}
        id={`${number}`}
        onClick={handleClick}
      >
        {number}
      </button>
    );
  });
}

export default PageNumbers;