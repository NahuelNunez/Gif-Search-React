import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="w-full mt-2 md:mt-2 lg:mt-2 2xl:mt-2" onSubmit={onSubmit}>
      <input
        className="p-5 border border-purple-600 rounded-md w-[60%] md:w-[25%] lg:w-[15%]  shadow-md focus:ring-2 ring-purple-600 outline-none "
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
