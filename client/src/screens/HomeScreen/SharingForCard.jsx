const SharingForCard = () => {
  return (
    <div className=" p-4 rounded-base md:p-8" id="share">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight">
        Share your portfolio anywhere
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">With Recruiters</h3>
          <p className="text-gray-600">
            Include your portfolio link in job applications and resumes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">On LinkedIn</h3>
          <p className="text-gray-600">
            Add your portfolio to your professional profiles.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Across the Web</h3>
          <p className="text-gray-600">
            Share one link that contains your projects, skills, and experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharingForCard;
