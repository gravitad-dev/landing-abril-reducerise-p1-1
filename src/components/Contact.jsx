import data from "../mock/data.json";

import Button from "./ui/Button";

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 h-[300px] flex items-center justify-center flex-col rounded-custom'>
      <h2 className='subtitle title-gradient mb-5'>
        {data["section-five"].title}
      </h2>
      <div className='flex items-center justify-center'>
        <Button>
          <a href={data["section-five"].link} target='_blank' rel='noreferrer'>
            Contactar
          </a>
        </Button>
      </div>
    </div>
  );
};
export default Contact;

// from-apple-50 to-apple-100
