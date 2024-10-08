import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ShowWordWithCursor from "./showWordWithCursor";
import { gap } from "@/lib/constants";

interface Props {
  typingParagraphRef: React.RefObject<HTMLDivElement>;
  cursorRef: React.RefObject<HTMLDivElement>;
  currentWordRef: React.RefObject<HTMLDivElement>;
  showCursor: boolean;
}

const WordDisplay = ({
  typingParagraphRef,
  cursorRef,
  currentWordRef,
  showCursor,
}: Props) => {
  const {
    level,
    height: letterHeight,
    width: letterWidth,
  } = useAppSelector((state) => state.typingParagraphProp);
  const { wordArr, wordIndex, letterIndex } = useAppSelector(
    (state) => state.typingWord
  );

  return (
    <motion.div
      className=" flex flex-wrap gap-y-pa text-pa relative w-full mx-8 "
      initial={{ y: 0 }}
      animate={{
        y:
          -1 * (level * letterHeight + Math.max(0, level) * letterHeight * gap), // move the total line height as well as the gap
      }}
      transition={{ type: "tween", duration: "0.05" }}
      style={{
        columnGap: 1.5 * letterWidth,
      }}
      ref={typingParagraphRef}
    >
      {wordArr.map((wordProp, index) => (
        <ShowWordWithCursor
          wordProp={wordProp}
          index={index}
          wordIndex={wordIndex}
          cursorRef={cursorRef}
          currentWordRef={currentWordRef}
          isCurrent={index === wordIndex}
          letterIndex={letterIndex}
          showCursor={showCursor}
          key={index}
        />
      ))}
    </motion.div>
  );
};

export default WordDisplay;
