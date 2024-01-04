import { ImSpinner8 } from 'react-icons/im';
import { CardTop } from './CardTop.jsx';
import { CardBody } from './CardBody.jsx';
import { CardBottom } from './CardBottom.jsx';

export const CardWeather = ({ loading = false, data, }) => {
  return (
    <div
      className="w-full max-w-[450px] bg-black/20 min-h-[520px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6 flex flex-col justify-between">
      {
        loading ?
          (
            <div className="w-full h-full flex justify-center items-center">
              <ImSpinner8 className="text-white text-5xl animate-spin"/>
            </div>
          ) :
          (
            <>
              { /* Card top */ }
              <CardTop
                type={ data.weather[0].main }
                city={ data.name }
                Country={ data.sys.country }/>
              { /* Card body */ }
              <CardBody
                temp={ parseInt(data.main.temp) }
                description={ data.weather[0].description }/>
              { /* Card bottom */ }
              <CardBottom
                visibility={ data.visibility / 1000 }
                feelsLike={ parseInt(data.main.feels_like) }
                humidity={ data.main.humidity }
                windSpeed={ data.wind.speed }/>
            </>
          )
      }
    </div>
  );
};
