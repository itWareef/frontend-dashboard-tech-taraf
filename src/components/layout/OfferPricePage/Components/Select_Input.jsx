const Select_Input = ({ array, className }) => {
  return (
    <form className="max-w-sm ">
      <select
        id="developers"
        className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-t-lg focus:border-gray-500 block w-[300px] px-5 py-2 appearance-none `}
      >
        {array?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Select_Input;
