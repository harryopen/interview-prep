import axios from "axios";
import React, { useState } from "react";
interface GithubUser {
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  url: string;
  public_repos: number;
  html_url: string;
}

const GithubFinder = () => {
  const [userName, setUserName] = useState<string>("");
  const [userDetails, setUserDetails] = useState<GithubUser>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await axios<GithubUser>(
        `https://api.github.com/users/${userName}`
      );
      setUserDetails(response.data);
    } catch (error) {
      console.error("something went wrong", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = () => {
    fetchUserDetails();
    setUserName("");
  };

  return (
    <>
      <div className="flex gap-2">
        <label>Enter the username:</label>
        <input
          className="border px-2"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName"
          value={userName}
          type="text"
        ></input>
        <button
          onClick={handleSearch}
          className=" text-white cursor-pointer bg-blue-400 rounded-4xl px-4"
        >
          {isLoading ? "please hold on" : "search"}
        </button>
      </div>
      {/*User Card*/}
      <div className="mt-4 border p-4 rounded shadow">
        <img
          src={userDetails?.avatar_url}
          alt={userDetails?.login}
          className="w-20 h-20 rounded-full mb-2"
        />
        <h2 className="text-lg font-bold">{userDetails?.login}</h2>
        <p>Repos: {userDetails?.public_repos}</p>
        <p>Followers: {userDetails?.followers}</p>
        <p>Following: {userDetails?.following}</p>
        <a
          href={userDetails?.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Visit GitHub Profile
        </a>
      </div>
    </>
  );
};

export default GithubFinder;
