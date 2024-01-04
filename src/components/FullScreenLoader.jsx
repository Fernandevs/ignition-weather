import { ImSpinner8 } from 'react-icons/im';

export const FullScreenLoader = () => {
  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
      <div>
        <ImSpinner8 className="text-5xl animate-spin text-white"/>
      </div>
    </div>
  );
};
