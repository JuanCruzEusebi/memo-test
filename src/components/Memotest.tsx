import { useEffect, useState } from "react";
import { createStore } from "redux";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/bower-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/ie10-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=100&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=100&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function App() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "@counter/incremented":
        return state + 1;
    }
  };

  const store = createStore(counterReducer);

  const increment = {
    type: "@counter/incremented",
  };

  store.dispatch(increment);
  console.log(store.getState());

  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
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
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: 7,
        border: "1px solid white",
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
              border: "1px solid #666",
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
  );
}
