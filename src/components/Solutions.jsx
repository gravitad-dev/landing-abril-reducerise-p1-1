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
    <div id='soluciones'>
      <h2 className='subtitle title-gradient mb-[70px] '>
        {data['section-two'].title}
      </h2>
      <div className='mt-4 grid grid-cols-solutions-grid gap-10 justify-center items-baseline'>
        {data['section-two'].items.map((item) => (
          <div key={item.id} className='text-center'>
            <div
              className='
              bg-secondary
              text-apple-50 
              rounded-full 
              w-10 h-10
              md:text-2xl md:w-16 md:h-16
              flex items-center justify-center
              mb-4 mx-auto
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
