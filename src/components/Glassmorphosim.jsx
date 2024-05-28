// eslint-disable-next-line react/prop-types
const Glassmorphosim = ({children}) => {
  return (
    <div className="flex flex-col justify-center items px-10 py-8 bg-purple-700 rounded-md
     bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      {children}
    </div>
  );
};

export default Glassmorphosim;
