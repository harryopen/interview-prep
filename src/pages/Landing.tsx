import { useState } from "react";
import ContentDisplay from "./component/ContentDisplay";
import TopicList from "./component/TopicList";
import { topics } from "../assets/data";

const Landing = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    `Star Rating Component`
  );
  // const currentContent = topicContent[selectedTopic] || null;

  const handleTopicSelect = (TopicId: string) => {
    setSelectedTopic(TopicId);
  };
  return (
    <div className="h-screen flex bg-background">
      {" "}
      <TopicList
        topics={topics}
        selectedTopic={selectedTopic}
        onTopicSelect={handleTopicSelect}
      />
      <ContentDisplay content={selectedTopic} />
    </div>
  );
};

export default Landing;
