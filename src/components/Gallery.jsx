import data from '../mock/data.json';
import Layout from './ui/Layout';

const Gallery = () => {
  return (
    <div id='galeria' className='bg-[#181818]'>
      <Layout>
      <h2 className='subtitle title-gradient mb-[70px] max-w-[900px] mx-auto'>
        {data['section-three'].title}
      </h2>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center'>
        {data['section-three'].photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className='object-cover w-full h-full rounded-custom'
          />
        ))}
      </div>
      </Layout>
    </div>
  );
};

export default Gallery;
