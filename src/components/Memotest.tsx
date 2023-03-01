import React from "react";
import { useEffect, useState } from "react";
import Score from "../components/Score";
import Leaderboard from "./Leaderboard";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/bower-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/ie10-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=100&color=currentColor",
  // "https://icongr.am/devicon/typescript-original.svg?size=100&color=currentColor",
  // "https://icongr.am/devicon/python-original.svg?size=100&color=currentColor",
  // "https://icongr.am/devicon/docker-original.svg?size=100&color=currentColor",
  // "https://icongr.am/devicon/css3-original.svg?size=100&color=currentColor",
  // "https://icongr.am/devicon/git-original.svg?size=100&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [counter, setCounter] = useState(0);

  function addToScore() {
    return setCounter(counter + 1);
  }
  useEffect(() => {
    const id = setInterval(() => setCounter((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
        setCounter(counter - 10);
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length == IMAGES.length) {
      alert("You WIN!");
    }
  }, [guessed]);

  return (
    <div className="memo-container" onClick={addToScore}>
      <Score score={counter} />
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: 7,
          minWidth: "600px",
          margin: "auto",
        }}
      >
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
              key={image}
              style={{
                padding: 12,
                border: "1px solid #888",
                borderRadius: 12,
                cursor: "pointer",
              }}
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="icon" />
              ) : (
                <img
                  key={url}
                  src={
                    "https://icongr.am/clarity/eye.svg?size=100&color=currentColor"
                  }
                  alt="icon"
                />
              )}
            </li>
          );
        })}
      </ul>
      <Leaderboard />
    </div>
  );
}
