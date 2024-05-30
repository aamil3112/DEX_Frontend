
const InputField = ({ label, placeholder, value, onChange, children }) => {
  return (
    <div className="relative w-full">
     <input
  type="number"
  className="text-white border-1 peer block w-full appearance-none 
  rounded-lg border border-black bg-transparent px-2.5 pb-4 pt-4 
  text-sm focus:border-black focus:outline-none focus:ring-0"
  placeholder={placeholder}
  onChange={onChange}
  style={{ '-moz-appearance': 'textfield' }} /* Firefox */
  step="any" /* Chrome, Safari, Edge */
/>

      <label
        className="absolute top-2 left-1 z-10 origin-[0]
         -translate-y-4 scale-75 transform cursor-text select-none
          bg-[#693FE9] px-2 text-sm text-white peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:px-2 peer-focus:text-black"
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
