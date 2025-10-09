import Accordians from "./Accordians";
import LoadMoreButton from "./LoadMoreButton";
import StartRating from "./StartRating";

interface ContentDisplayProps {
  content: string;
}
const ContentDisplay = ({ content }: ContentDisplayProps) => {
  const renderComponent = () => {
    switch (content) {
      case "Star Rating Component":
        return <StartRating />;
       case "Accordian component":
        return <Accordians/> 
        case "Load More Button":
            return <LoadMoreButton/>
      default:
        return <h2>Select a question from the left bar 👈</h2>;
    }
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div>
        <h1>React Fundamentals</h1>
        <p>
          Master the building blocks of React development with comprehensive
          guides and practical examples.
        </p>
        <div>
            {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
