type Props = {
  pageNumbers: number[];
  handleClick: (nextpage: number) => void;
}

function PageNumbers({ pageNumbers, handleClick }: Props) {
  return (
    <div className="radio-input">
      {pageNumbers.map(number => {
        return (
          <>
            <label>
              <input value="value-1" name="value-radio" id="value-1" type="radio" onChange={() => handleClick(number)} />
              <span>{number}</span>
            </label>
          </>
        );
      })}
      <span className="selection"></span>
    </div>
  )
}

// return (
//   <button
//     key={number}
//     id={`${number}`}
//     onClick={handleClick}
//   >
//     {number}
//   </button>
// );

export default PageNumbers;