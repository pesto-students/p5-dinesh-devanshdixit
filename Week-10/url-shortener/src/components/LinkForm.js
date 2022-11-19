import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../pages/Home";

const LinkForm = () => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const { setShortedLinks } = useContext(UserContext);
  const linkRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enteredUrl === "") {
      setEnteredUrl("");
      linkRef.current.focus();
      return;
    }

    fetch("https://api.shrtco.de/v2/shorten?url=" + enteredUrl)
      .then((res) => res.json())
      .then(
        (res) => {
          if (res.ok === false) {
            alert(res.error);
            setEnteredUrl("");
            linkRef.current.focus();
            return;
          }
          const item = {
            longURL: enteredUrl,
            shortURL: res.result.full_short_link,
          };
          setShortedLinks((prevItem) => [item, ...prevItem]);
          setEnteredUrl("");
        },
        (error) => {
          console.error(error);
        }
      );
    return false;
  };

  return (
    <div className="linkform-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten your link"
          value={enteredUrl}
          onChange={(e) => setEnteredUrl(e.target.value)}
          ref={linkRef}
        />
        <button>Shorten</button>
      </form>
    </div>
  );
};

export default LinkForm;
