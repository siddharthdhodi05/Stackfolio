import {
  useGetPortfolioQuery,
  useUpdatePortfolioMutation,
} from "@slices/portfolioApiSlice";
import PortfolioForm from "./PortfolioForm";

const MyPortfolio = () => {
  const { data: portfolio } = useGetPortfolioQuery();
  const [updatePortfolio] = useUpdatePortfolioMutation();
  const submitHandler = async (formData) => {
    await updatePortfolio(formData);
  };

  return (
    <div className="bg-white">
      <div className=" container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="text-2xl col-span-4 sm:col-span-4">
            <div className=" text-4xl font-bold text-blue-900">
              Update Your Portfolio
            </div>
            <PortfolioForm onSubmit={submitHandler} portfolio={portfolio} />
          </div>
          <div className="text-4xl col-span-4  sm:col-span-8">Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
