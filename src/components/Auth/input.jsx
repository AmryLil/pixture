const Input = (props) => {
  const { label, type, placeholder, name, value, onChange, ClassName } = props;
  return (
    <>
      <div className="flex flex-col">
        <label for={name} className="font-bold pl-1 mb-1 text-primary">
          {label}
        </label>
        <input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          className={`py-1.5 px-2 w-full border-2 rounded-md ${ClassName}`}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
};

export default Input;
