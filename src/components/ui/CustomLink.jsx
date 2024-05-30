const CustomLink = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      className={`
      cursor-pointer  p-2  text-apple-50  hover:text-apple-200
      `}
      {...props}
    >
      {children}
    </a>
  );
};
export default CustomLink;
