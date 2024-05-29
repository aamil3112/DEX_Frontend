
const InputField = ({ label, placeholder, value, onChange, children }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border-1 peer block w-full appearance-none rounded-lg border border-black bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
        placeholder={placeholder}
        onChange={onChange}
      />
      <label
        className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-[#E5D3F5] px-2 text-sm text-gray-500 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:px-2 peer-focus:text-black"
      >
        {label}
      </label>
      <div className="absolute top-3 right-2 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default InputField;
