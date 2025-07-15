export default function Input({ title, placeholder }) {
  return (
    <div className=" my-[30px]">
      <label htmlFor={title} className=" w-[130px] mb-[50px]">
        {title}
      </label>
      <input
        type="text"
        placeholder={placeholder ? placeholder : title}
        id={title}
        className="block w-[98%] text-[1rem] px-[5px] h-[30px] border-2 border-gray-400 mt-[8px]"
      />
    </div>
  );
}
