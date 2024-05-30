import data from '../../mock/data.json';

const Logo = () => {
  return <img src={data.logo} alt='imagen del logo' className='w-[150px]' />;
};
export default Logo;
