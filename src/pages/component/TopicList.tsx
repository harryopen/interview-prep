interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  itemCount: number;
}
interface TopicList {
  topics: Topic[];
  selectedTopic: string;
  onTopicSelect: (topicId: string) => void;
}
const TopicList = ({ topics, selectedTopic, onTopicSelect }: TopicList) => {
  const categories = Array.from(new Set(topics.map((topic) => topic.category)));
  return (
    <div className="w-80 h-full border-r bg-card p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="mb-2">Topics</h2>
        <p className="text-muted-foreground text-sm">
          Browse through different topics and explore their content
        </p>
      </div>
      <div className="space-y-2 m-2 ">
        {categories.map((category) => (
          <div>
            <h3>{category}</h3>
            {/* card */}
            {topics
              .filter((topic) => topic.category === category)
              .map((topic) => (
                <div
                  className={`m-1 p-4 rounded-4xl border gap-1.5 cursor-pointer transition-all hover:shadow-md ${
                    selectedTopic === topic.id
                      ? "border-primary bg-primary/5"
                      : "hover:border-primary/20"
                  } `}
                  onClick={()=>onTopicSelect(topic.id)}
                >
                  <div className="flex justify-between">
                    <h3>{topic.title}</h3>
                    <div>{topic.itemCount}</div>
                  </div>
                  <p>{topic.description}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopicList;
