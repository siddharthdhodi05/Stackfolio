import { Link } from "react-router-dom";

const Button = ({ Content, url }) => {
  return (
    <Link to={url}>
      <button
        type="button"
        className="bg-black text-white px-5 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-neutral-800 hover:scale-105 active:scale-95"
      >
        {Content}
      </button>
    </Link>
  );
};

export default Button;
