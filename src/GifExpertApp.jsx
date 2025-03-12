import { useEffect, useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { InfoFoteer } from "./components/InfoFoteer";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Street Fighther"]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const onAddCategory = (newCategory) => {
    if (
      categories.find((category) =>
        category.toLowerCase().includes(newCategory.toLowerCase())
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen ">
      <div className="m-3 md:px-10 md:py-24 md:mx-auto lg:px-10 lg:py-24 lg:mx-auto">
        <div className="flex flex-col  gap-5 md:flex md:flex-row  xl:flex xl:flex-row   ">
          <div className="flex flex-col w-full ">
            <h1 className="text-2xl font-bold">
              GifExpertApp
              <div
                className={`w-0 border border-purple-600 transition-all duration-500 ${
                  loaded ? "w-[52%] md:w-[46%] lg:w-[33%] 2xl:w-[17%]" : "w-0"
                }`}
              ></div>
            </h1>
          </div>

          <p className="break-words  w-full text-gray-800 tracking-widest leading-relaxed text-balance ">
            Este buscador te permite encontrar GIFs de forma rápida y sencilla.
            Solo tienes que escribir una palabra clave en la barra de búsqueda
            y, automáticamente, se mostrarán los GIFs más populares relacionados
            con tu búsqueda.
          </p>
        </div>
        <AddCategory onNewCategory={(event) => onAddCategory(event)} />

        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            setCategories={setCategories}
            categories={categories}
          />
        ))}
      </div>
      <InfoFoteer />
    </div>
  );
};
