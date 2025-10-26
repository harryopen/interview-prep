import React from "react";
import useWindowSize, {
  type windowType,
} from "../../customHooks/useWindowSize";

const ResponsiveComponent = () => {
  const { height, width }: windowType = useWindowSize();
  return <div>
    <h1>Height of the screen is </h1>{height}
    <h1>Width of the screen is</h1>{width}
    </div>;
};
export default ResponsiveComponent;
