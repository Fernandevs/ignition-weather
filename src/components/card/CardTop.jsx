import { IoMdCloudy, IoMdRainy, IoMdSnow, IoMdSunny, IoMdThunderstorm } from 'react-icons/io';
import { BsCloudDrizzleFill, BsCloudHaze2Fill } from 'react-icons/bs';

export const CardTop = ({ type = 'Clear', city = 'Morelia', country = 'MX' }) => {
  const date = new Date();
  let icon;

  switch (type) {
    case 'Clouds':
      icon = <IoMdCloudy/>;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill/>;
      break;
    case 'Rain':
      icon = <IoMdRainy className="text-[#31cafb]"/>;
      break;
    case 'Clear':
      icon = <IoMdSunny className="text-[#ffde33]"/>;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill className="text-[#31cafb]"/>;
      break;
    case 'Snow':
      icon = <IoMdSnow className="text-[#31cafb]"/>;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm/>;
      break;
  }
  return (
    <div className="flex flex-row justify-between items-center gap-x-4">
      { /* Icon */ }
      <div className="text-[64px]">{ icon }</div>
      <>
        { /* Country name */ }
        <div className="text-2xl font-semibold">{ city }, { country }</div>
        { /* date */ }
        <>
          { date.getUTCDate() }/{ date.getUTCMonth() + 1 }/{ date.getUTCFullYear() }
        </>
      </>
    </div>
  );
};
