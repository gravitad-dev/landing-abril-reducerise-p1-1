import data from '../mock/data.json';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div
      id='#'
      className='
      flex flex-col justify-center items-center gap-5 lg:flex-row  lg:justify-end
        md:h-[100vh]  py-24
        relative'
      style={{
        backgroundImage: `url(${data['section-one'].img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-[#121111] via-[#121111]/90 via-60% to-[#46D643]/20 z-10'></div>

      {/* text */}
      <div className='flex-1 z-20 px-2 py-5 flex flex-col items-center justify-center max-w-[800px] mx-auto'>
        <h1
          className='text-[30px] md:text-5xl text-balance max-w-[850px] font-bold
          title-gradient md:leading-[1.2] mb-4  text-center'
        >
          {data['section-one'].title}
        </h1>
        <p className='mt-2  text-pretty  text-center text-apple-50  leading-[1.6]'>
          {data['section-one'].subtitle.paragraph1}
        </p>
        <p className='mt-2  text-pretty  text-center text-apple-50  leading-[1.6]'>
          {data['section-one'].subtitle.paragraph2}
        </p>
        <Button css='mt-4'>
          <a
            href={data['section-one'].cta.href}
            target='_blank'
            rel='noreferrer'
          >
            {data['section-one'].cta.text}
          </a>
        </Button>
      </div>
    </div>
  );
};
export default Hero;
