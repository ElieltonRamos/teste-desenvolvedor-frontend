interface PropsInput {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textLabel: string;
}

function InputSearch({onChange, placeholder, value, textLabel}: PropsInput) {
  return (
    <div className="input-group">
      <label className="label">{textLabel}</label>
      <input
        type="text"
        className="input" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
      <div></div></div>
  )
}

export default InputSearch;
