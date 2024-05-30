import data from '../mock/data.json';

const h3Class = 'font-semibold text-[20px] mb-5 text-balance';
const pClass = 'text-[14px] leading-[1.6]';

const JoinUs = () => {
  const { title, images, text } = data['section-seven'];

  return (
    <div id='comenzar'>
      <h2 className='subtitle title-gradient'>{title}</h2>
      <div className='grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 '>
        {images.map((img) => (
          <img
            src={img}
            alt='unete a nosotros'
            className='rounded-md object-cover w-full h-full max-h-[400px]'
          />
        ))}
      </div>
      {/* text */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-10 mt-10'>
        <div>
          <h3 className={h3Class}>{text.one.title}</h3>
          <p className={pClass}>{text.one.desc}</p>
        </div>
        <div>
          <h3 className={h3Class}>{text.two.title}</h3>
          <p className={pClass}>{text.two.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
