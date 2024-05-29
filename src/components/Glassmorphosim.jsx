// eslint-disable-next-line react/prop-types
const Glassmorphosim = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-purple-600 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full md:w-auto">
      {children}
    </div>
  );
};

export default Glassmorphosim;
