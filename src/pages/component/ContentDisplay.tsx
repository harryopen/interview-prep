import Accordians from "./Accordians";
import AutoCompleteSuggestion from "./AutoCompleteSuggestion";
import GithubFinder from "./GithubFinder";
import LoadMoreButton from "./LoadMoreButton";
import Model from "./Model";
import QrGenerator from "./QrGenerator";
import StartRating from "./StartRating";
import ParentTab from "./tabs/ParentTab";
import TicTacToe from "./TicTacToe";

interface ContentDisplayProps {
  content: string;
}
const ContentDisplay = ({ content }: ContentDisplayProps) => {
  const renderComponent = () => {
    switch (content) {
      case "Star Rating Component":
        return <StartRating />;
      case "Accordian component":
        return <Accordians />;
      case "Load More Button":
        return <LoadMoreButton />;
      case "Qr code generator":
        return <QrGenerator />;
      case "Dynamic Tabs":
        return <ParentTab />;
      case "github Profile":
        return <GithubFinder />;
      case "autocomplete-suggestion":
        return <AutoCompleteSuggestion />;
      case "tic-tac-toe":
        return <TicTacToe />;
      case "show-Modal":
        return <Model />;
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
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default ContentDisplay;
