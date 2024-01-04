import { TbTemperatureCelsius } from 'react-icons/tb';

export const CardBody = ({ temp, description }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        { /* Temp */ }
        <div className="text-[100px] leading-none font-light">{ temp }</div>
        { /* Celsius */ }
        <div className="text-2xl">
          <TbTemperatureCelsius/>
        </div>
      </div>
      <div className="capitalize text-center">{ description }</div>
    </>
  );
};
