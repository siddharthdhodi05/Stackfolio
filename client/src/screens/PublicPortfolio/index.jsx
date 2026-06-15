import PortfolioContent from "./PortfolioContent";
import PortfolioSidebar from "./PortfolioSidebar";

const PublicPortfolioScreen = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <PortfolioSidebar />
          <PortfolioContent />
        </div>
      </div>
    </div>
  );
};

export default PublicPortfolioScreen;
