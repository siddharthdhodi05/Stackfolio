import { useParams } from "react-router-dom";
import PortfolioContent from "./PortfolioContent";
import PortfolioSidebar from "./PortfolioSidebar";
import { useGetPublicPortfolioQuery } from "@slices/portfolioApiSlice";

const PublicPortfolioScreen = () => {
  const { username } = useParams();
  const {
    data: Portfolio,
    isLoading,
    isError,
    error,
  } = useGetPublicPortfolioQuery(username);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>{error.data?.message || error?.error}</p>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <PortfolioSidebar portfolio={Portfolio} />
            <PortfolioContent portfolio={Portfolio} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicPortfolioScreen;
