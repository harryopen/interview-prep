import ChildTabs from "./ChildTabs";

interface tabType {
  lable: string;
  content: React.ReactNode;
}
function RandomContent() {
  return <h1>some randomContent</h1>;
}
const ParentTab = () => {
  const tabData: tabType[] = [
    { lable: "Tab1", content: "I'm tab 1" },
    {
      lable: "Tab2",
      content: "I'm tab 2",
    },
    { lable: "Tab3", content: <RandomContent /> },
  ];
  return <ChildTabs tabContent={tabData} />;
};

export default ParentTab;
