import data from '../mock/data.json';

//icons
import { BsColumns, BsColumnsGap, BsLayoutTextWindow } from 'react-icons/bs';

const icons = {
  arquitectura: <BsColumns />,
  diseno: <BsColumnsGap />,
  raices: <BsLayoutTextWindow />,
};

const Solutions = () => {
  return (
    <div id='soluciones' className='w-full'>
      <h2 className='subtitle title-gradient mb-[70px]'>
        {data['section-two'].title}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {data['section-two'].items.map((item) => (
          <div key={item.id} className='text-center bg-white  p-4 rounded-lg border border-gray-600' >
            <div
              className='
              bg-secondary
              text-apple-50 
              rounded-full 
              w-10 h-10
              md:text-2xl md:w-16 md:h-16
              flex items-center justify-center
              mb-6 mx-auto
            '
            >
              <img src={item.icon} alt='icono' />
            </div>
            <h3 className='font-semibold text-[20px]'>{item.title}</h3>
            <p className='text-pretty text-sm leading-[1.6] md:text-md my-1  mx-auto'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
