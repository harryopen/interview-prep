import axios from "axios";
import React, { useEffect, useState } from "react";

const AutoCompleteSuggestion = () => {
  // Local states
  const [searchParam, setSearchParam] = useState<string>("");
  const [userData, setUserData] = useState<string[]>([]); // store string[] directly
  const [filteredData, setFilteredData] = useState<string[]>([]);

  // Handler Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filterData = userData.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setFilteredData(filterData);
    } else {
      setFilteredData([]);
    }
  };

  // API call
  const fetchUserNames = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      // store firstName strings in userData
      const users: string[] = response.data.users.map(
        (user: any) => user.firstName
      );
      setUserData(users);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchUserNames();
  }, []);

  return (
    <div>
      <input
        className="border p-2 rounded"
        type="text"
        value={searchParam}
        placeholder="Search here..."
        onChange={handleChange}
      />

      {/* List of filtered users */}
      {filteredData.map((name, index) => (
        <h5 key={index}>{name}</h5>
      ))}
    </div>
  );
};

export default AutoCompleteSuggestion;
