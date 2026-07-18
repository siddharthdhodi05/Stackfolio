import {
  useGetPortfolioQuery,
  useUpdatePortfolioMutation,
} from "@slices/portfolioApiSlice";
import PortfolioForm from "./PortfolioForm";
import { toast } from "react-toastify";
import MyProjects from "./MyProjects";

const MyPortfolio = () => {
  const { data: portfolio } = useGetPortfolioQuery();
  const [updatePortfolio, { isLoading: loadingUpdatePortfolio }] =
    useUpdatePortfolioMutation();

  const submitHandler = async (formData) => {
    try {
      await updatePortfolio(formData).unwrap();
      toast.success("Portfolio updated");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="bg-white">
      <div className=" container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="text-2xl col-span-4 md:col-span-3">
            {/* {col-span-3 sm:col-span-4} */}
            <div className=" text-4xl font-bold text-blue-900">
              Update Your Portfolio
            </div>
            <PortfolioForm
              onSubmit={submitHandler}
              portfolio={portfolio}
              loadingUpdatePortfolio={loadingUpdatePortfolio}
            />
          </div>
          <div className="col-span-4  sm:col-span-9">
            <MyProjects projects={portfolio?.projects || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
