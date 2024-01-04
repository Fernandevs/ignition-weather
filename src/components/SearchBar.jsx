import { IoMdSearch } from 'react-icons/io';

export const SearchBar = ({ handleInput, handleSubmit, animate = false }) => {
  return (
    <form
      className={ `${ animate ? 'animate-shake' : 'animate-none' } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-2` }>
      <div className="h-full relative flex items-center justify-between p-2">
        <input
          type="text"
          placeholder="Buscar por ciudad"
          onChange={ handleInput }
          className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"/>
        <button
          onClick={ handleSubmit }
          className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition">
          <IoMdSearch className="text-2xl text-white"/>
        </button>
      </div>
    </form>
  );
};
