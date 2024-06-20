import React from "react";
import TypingComponent from "../components/welcome/TypingComponent";
import { useState } from "react";

const useTypingAnime = (text, frame, flag) => {
  const [animeFinishFlag, setFlageState] = useState(false);
  const setAnimeFinished = () => {
    setFlageState(true);
  };

  const TypingTextDiv = () => {
    return TypingComponent({
      text,
      frame,
      setAnimeFinished,
      animeFinishFlag,
      flag,
    });
  };

  return { animeFinishFlag, TypingTextDiv };
};
export default useTypingAnime;
