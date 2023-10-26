type InputProps = {
  children?: string;
  className?: string;
  text?: string;
  placeholder?: string;
  type?: string;
  value?: string;
};

const CustomDropdown = ({ children, text, ...props }: InputProps) => {
  //   const currencyList: any = [];
  return (
    <div className="form-select">
      <label>{text}</label>
      <div className="form-select-list-container">
        <input {...props} />
        {/* <ul className="form-select-holder">
          {currencyList.map((currency: any) => (
            <li key={currency} className="form-select-list">
              {currency}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default CustomDropdown;
