import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StartRating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  // local handlers
  const handleGetIndex = (getIndex: number) => {
    setRating(getIndex);
  };
  const handleMouseEnter = (getIndex: number) => {
    setHover(getIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  console.log("log hover ", hover);
  return (
    <div className="flex ">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={`${
              index <= (hover || rating) ? "bg-red-500" : "bg-gray-300"
            } w-6 h-6 rounded-full`}
            onClick={() => handleGetIndex(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default StartRating;
