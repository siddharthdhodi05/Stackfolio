import { Link, useParams } from "react-router-dom";

const ProfileCard = ({ portfolio }) => {
  const { username } = useParams("username");
  return (
    <>
      <img
        src="https://randomuser.me/api/portraits/men/94.jpg"
        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
      />
      <h1 className="text-xl font-bold">{username}</h1>
      <p className="text-gray-700">{portfolio.role}</p>
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <Link className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl">
          Contact
        </Link>
        <Link className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-xl">
          Resume
        </Link>
      </div>
    </>
  );
};

export default ProfileCard;
