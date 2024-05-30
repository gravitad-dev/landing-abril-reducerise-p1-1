import data from '../mock/data.json';

const Gallery = () => {
  return (
    <div id='galeria'>
      <h2 className='subtitle title-gradient mb-[70px] max-w-[900px] mx-auto'>
        {data['section-three'].title}
      </h2>
      <div className='grid grid-cols-gallery-grid gap-8 items-center justify-center'>
        {data['section-three'].photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.alt}
            key={photo.id}
            className='object-cover w-full h-full rounded-custom'
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
