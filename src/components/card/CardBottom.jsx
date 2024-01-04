import { BsEye, BsThermometer, BsWater, BsWind } from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';

export const CardBottom = ({ visibility, feelsLike, humidity, windSpeed }) => {
  return (
    <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2">
          { /* Icon */ }
          <div className="text-[20px]">
            <BsEye/>
          </div>
          <>
            Visibilidad { ' ' }
            <span className="ml-2">
              { visibility } km
            </span>
          </>
        </div>
        <div className="flex items-center gap-x-2">
          { /* Icon */ }
          <div className="text-[20px]">
            <BsThermometer/>
          </div>
          <div className="flex">
            Sensación térmica
            <div className="flex ml-2">
              { feelsLike }
              <TbTemperatureCelsius/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2">
          { /* Icon */ }
          <div className="text-[20px]">
            <BsWater/>
          </div>
          <>
            Humedad { ' ' }
            <span className="ml-2">
              { humidity } %
            </span>
          </>
        </div>
        <div className="flex items-center gap-x-2">
          { /* Icon */ }
          <div className="text-[20px]">
            <BsWind/>
          </div>
          <>
            Viento <span className="ml-2">
            { windSpeed } m/s
            </span>
          </>
        </div>
      </div>
    </div>
  );
};
