export const Message = ({ label, placeholder }) => {
  return (
    <div className="w-full text-sm">
      <label className="text-border font-semibold" htmlFor="">
        {label}
      </label>
      <textarea className="w-full h-40 mt-2 pt-4 px-4 border-border rounded text-text bg-main">
        {placeholder}
      </textarea>
    </div>
  );
};
export const Select = ({ label, options, onChange }) => {
  return (
    <>
      <label className="text-border font-semibold">{label}</label>
      <select
        className="w-full mt-2 px-6 py-4 border-border rounded text-text bg-main"
        onChange={onChange}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};

export const Input = ({ label, placeholder, type, bg }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className={`w-full text-sm mt-2 p-4 border border-border text-white ${
          bg ? "bg-main" : "bg-dry"
        }`}
      />
    </div>
  );
};
