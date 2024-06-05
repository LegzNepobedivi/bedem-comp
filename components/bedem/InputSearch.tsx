export default function InputSearch() {
  return (
    <div className="w-full flex">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>

      <input
        type="text"
        id="Search"
        placeholder="Država, Grad, Adresa"
        className="w-full rounded-sm border-gray-200 px-2 py-2.5 pe-10 shadow-sm sm:text-sm"
      />

      <span className=" inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-white hover:text-gray-700">
          <span className="sr-only">Država, Grad, Adresa</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="p-1 h-6 w-6 bgIvanZelena"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}
