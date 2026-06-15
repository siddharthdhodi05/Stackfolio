const AboutMe = ({ description }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700">{description}</p>
    </>
  );
};

export default AboutMe;
