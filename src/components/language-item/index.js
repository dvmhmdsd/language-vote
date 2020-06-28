import React from "react";

import "./style.css";

export default function LanguageItem({ language, index, increaseCount }) {
  let { voteCount, name, clicked } = language;
  return (
    <>
      <li className="vote__list__item" key={index}>
        <span className="vote__list__item__count">{voteCount}</span>
        <span className="vote__list__item__name">{name}</span>
        <button
          disabled={clicked}
          className="language__item__voter"
          onClick={() => increaseCount(index)}
        >
          +
        </button>
      </li>
    </>
  );
}
