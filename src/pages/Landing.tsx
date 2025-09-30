import { useState } from "react";
import ContentDisplay from "./component/ContentDisplay";
import TopicList from "./component/TopicList";
import { topics } from "../assets/data";
import { topicContent } from "../assets/data";

const Landing = () => {
  const [selectedTopic, setSelectedTopic] =
    useState<string>(`react-fundamentals`);
  const currentContent = topicContent[selectedTopic] || null;

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
      <ContentDisplay content={currentContent} />
    </div>
  );
};

export default Landing;
