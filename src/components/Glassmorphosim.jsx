// eslint-disable-next-line react/prop-types
const Glassmorphosim = ({children}) => {
  return (
    <div className="bg-purple-700 rounded-md
     bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      {children}
    </div>
  );
};

export default Glassmorphosim;
