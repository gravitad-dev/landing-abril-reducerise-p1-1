import data from '../mock/data.json';

const Projects = () => {
  return (
    <div id='proyectos'>
      <h2 className='subtitle title-gradient'>{data['section-four'].title}</h2>
      <div className=' mt-10  flex items-center justify-center'>
        {data['section-four'].projects.map((project) => (
          <div key={project.id} className='shadow-md rounded-md flex-1'>
            <div
              className='h-[300px] max-h-[400px] w-full rounded-md overflow-hidden
              bg-no-repeat bg-center md:bg-left-bottom
              '
              style={{
                backgroundImage: `url(${project.img.url})`,
                backgroundSize: 'cover',
              }}
            />
            <div className='text-center mt-5 py-10 px-2'>
              <h3 className='font-semibold text-[18px] mb-4'>
                {project.title}
              </h3>
              <p className='text-pretty text-[14px] w-[90%] max-w-[700px] mx-auto'>
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
