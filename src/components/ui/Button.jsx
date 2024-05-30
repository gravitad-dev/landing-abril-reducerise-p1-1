const Button = ({ children, css }) => {
  return <button className={`btn ${css}`}>{children}</button>;
};
export default Button;
