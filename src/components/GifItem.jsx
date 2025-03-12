export const GifItem = ({ title, id, url }) => {
  return (
    <div className="flex flex-col items-center w-[20rem] justify-center  gap-5 shadow-xl p-5  ">
      <img
        src={url}
        alt={url}
        className=" h-50 border-0 rounded-md w-50 md:w-60 md:h-60 lg:w-60 lg:h-60 xl:w-80 xl:h-80 object-cover object-center"
      />
      <div className="flex">
        <p className="font-semibold text-xl tracking-widest ">{title}</p>{" "}
        <a href={url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#9810fa"
              d="m10 17.55l-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43a3 3 0 0 0-.18-.21a4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55M20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43a3 3 0 0 0 .23.21a4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
