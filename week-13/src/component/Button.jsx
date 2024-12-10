/* eslint-disable react/prop-types */

const Button = ({ icon, text, className, flip ,onClick }) => {
  return (
    <div className={`${className} flex items-center gap-2 cursor-pointer `} onClick={onClick}>
      {flip ? (
        <>
          {text && <p>{text}</p>}
          <img src={icon} alt="icon-svg" className="w-4 h-4" />
        </>
      ) : (
        <>
          <img src={icon} alt="icon-svg" className="w-4 h-4" />
          {text && <p>{text}</p>}
        </>
      )}
    </div>
  );
};

export default Button;
