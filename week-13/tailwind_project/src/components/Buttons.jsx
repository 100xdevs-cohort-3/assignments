export const Button = ({ 
    disabled, 
    children, 
    onClick 
}) => {
    return (
      <button 
        onClick={onClick}
        
        className={`rounded-2xl text-2xl px-2 py-2 text-white ${
          disabled ? "bg-blue-200 cursor-not-allowed" : "bg-green-400 cursor-pointer"
        }`}
      >
        {children}
      </button>
    );
  };
  