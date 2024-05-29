// eslint-disable-next-line react/prop-types
const Glassmorphosim = ({children}) => {
  return (
    <div
     className="flex flex-col justify-center items-center p-8 bg-purple-700 rounded-3xl
      bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border
       border-gray-100">
      {children}
    </div>
  );
};

export default Glassmorphosim;
