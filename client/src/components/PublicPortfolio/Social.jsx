import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Social = ({ github, linkedin, twitter }) => {
  return (
    <div>
      <h3 className="font-semibold text-center mt-4 ">Find me on</h3>
      <div className="flex justify-center items-center gap-6 my-6">
        {github && (
          <Link
            to={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaGithub size={24} />
          </Link>
        )}

        {linkedin && (
          <Link
            to={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </Link>
        )}

        {twitter && (
          <Link
            to={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition-colors"
          >
            <FaTwitter size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Social;
