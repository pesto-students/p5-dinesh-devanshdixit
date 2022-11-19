import React, { useContext } from "react";
import ShortedLinkCard from "./ShortedLinkCard";
import { UserContext } from "../pages/Home";

const LinkCard = () => {
  const { shortedLink } = useContext(UserContext);

  return (
    <div className="linklist-container">
      {shortedLink.map((link, index) => (
        <ShortedLinkCard key={index} longurl={link.longURL} shorturl={link.shortURL} />
      ))}
    </div>
  );
};

export default LinkCard;
