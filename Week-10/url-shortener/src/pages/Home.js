import React, { useState, createContext } from "react";
import LinkForm from "../components/LinkForm";
import LinkCard from "../components/LinkCard";

export const UserContext = createContext();

const shorted_Link = [
  {
    longURL:
      "https://www.google.com/search?q=shortly.com&amp;oq=sho&amp;aqs=chrome.1.69i57j69i59l2j69i61l3j69i65l2.2163j0j1&amp;sourceid=chrome&amp;ie=UTF-8",
    shortURL: "https://bit.ly/3R0Z4to",
  },
];

const Home = () => {
  const [shortedLink, setShortedLinks] = useState(shorted_Link);

  return (
    <UserContext.Provider value={{ shortedLink, setShortedLinks }}>
      <div className="page-content">
        <div className="link-container">
          <h1>Url Shortener</h1>
          <h4>Short links, big results</h4>
          <LinkForm />
        </div>
        <div className="list-container">
          <LinkCard />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
