const Text_Input = ({ text, onChangeRule }) => {
  return (
    <div className="flex justify-center items-center font-NotoKufiArabic bg-white rounded-[8px] text-right p-1 gap-1">
      <input
        type="text"
        value={text && text}
        className="text-right placeholder:text-[#aaaaaa]"
        placeholder={text ? text : "اكتب هنا"}
        onChange={onChangeRule}
      />
    </div>
  );
};

export default Text_Input;
