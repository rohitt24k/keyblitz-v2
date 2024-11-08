import { useMutableData } from "@/context/mutableDataProvider";
import {
  setEndTest,
  setPauseTest,
  setStartTest,
} from "@/lib/features/typingTests/typingTestsSlice";
import {
  changeLetterIndex,
  changePropOfWord,
  changeWordIndex,
} from "@/lib/features/typingWord/typingWordSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  currentWordRef: React.RefObject<HTMLDivElement>;
  typingParagraphRef: React.RefObject<HTMLDivElement>;
  handleFocus: () => void;
  handleBlur: () => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypingParagraphInputBox = ({
  inputRef,
  currentWordRef,
  typingParagraphRef,
  handleFocus,
  handleBlur,
  isModalOpen,
  setIsModalOpen,
}: Props) => {
  const inputValue = useRef("");
  const { wordArr, wordIndex, letterIndex, correctWordArr } = useAppSelector(
    (state) => state.typingWord
  );
  const { width: letterWidth } = useAppSelector(
    (state) => state.typingParagraphProp
  );
  const { startTest, endTest, pauseTest, resetTrigger } = useAppSelector(
    (state) => state.typingTests
  );

  const {
    startTestMethod,
    endTestMethod,
    pauseTestMethod,
    increaseTotalCorrectCharTyped,
    increaseTotalCharTyped,
    addEachWordError,
    addEachSecondWordTyped,
    addWordTimeStamp,
  } = useMutableData();

  // this variable is used for the addSecondsWordTyped
  const charTypedCount = useRef<number>(0);
  const correctCharTypedCount = useRef<number>(0);

  const dispatch = useAppDispatch();

  function checkForError(
    index: number,
    inputElement: HTMLInputElement,
    isNewInput: boolean,
    newInput: null | string // null if there is now new Input
  ) {
    const { value: typedWord } = inputElement;
    const correctWord = correctWordArr[index];
    const wordToShow = correctWord + typedWord.slice(correctWord.length);

    const cursorRect = currentWordRef.current?.getBoundingClientRect();
    const parentRect = typingParagraphRef.current?.getBoundingClientRect();

    if (cursorRect && parentRect) {
      /*
    
            now finding the error
            for every letter and for a word so the error format should be
            sth like 
    
            error:{
             error: true, // this is for the word error
             // now for each letter the error can be dark error or light error
    
             letterError:[0 | 1 | 2, 0 | 1 | 2 ....]  0 -> no error
                                                      1 -> soft error -> this occurs when the user overtypes
                                                      2 -> dark error -> this occurs when the wrong letter is typed 
            }
    
      */
      let wordError = typedWord.length !== correctWord.length;
      const letterError = typedWord.split("").map((letter, index) => {
        if (index > correctWord.length - 1) {
          wordError = true;
          return 1;
        } else if (letter === correctWord[index]) {
          return 0;
        } else {
          wordError = true;
          return 2;
        }
      });

      if (
        parentRect.right - cursorRect.right > letterWidth ||
        !isNewInput ||
        typedWord.length <= correctWord.length
      ) {
        // now check if the char typed is correct or not;
        if (isNewInput) {
          if (newInput === correctWord[letterIndex]) {
            // correct character is typed
            increaseTotalCorrectCharTyped();
            correctCharTypedCount.current++;
            increaseTotalCharTyped();
            charTypedCount.current++;
            // console.log("correct char", newInput, correctWord[letterIndex]);
          } else {
            // incorrect character is typed
            increaseTotalCharTyped();
            charTypedCount.current++;
            addEachWordError({ index: wordIndex });
            // console.log("incorrect char", newInput, correctWord[letterIndex]);
          }
        }

        dispatch(changeLetterIndex(typedWord.length));

        dispatch(
          changePropOfWord({
            index,
            prop: {
              word: wordToShow,
              error: { error: wordError, letterError },
              typedWord: typedWord,
            },
          })
        );
      } else {
        // console.log(isNewInput, typedWord, typedWord.slice(0, -1));
        inputElement.value = typedWord.slice(0, -1);
      }
    }
  }

  function handleTestPauseWhenBlurred() {
    if (startTest && !endTest) {
      pauseTestMethod();
    }
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const intervalFunction = () => {
      // console.log(
      //   "dispatch function is being called -> ",
      //   charTypedCount.current,
      //   correctCharTypedCount.current
      // );

      addEachSecondWordTyped({
        charTypedCount: charTypedCount.current,
        correctCharTypedCount: correctCharTypedCount.current,
      });

      charTypedCount.current = 0;
      correctCharTypedCount.current = 0;
    };

    if (startTest && !endTest && !pauseTest) {
      intervalId = setInterval(intervalFunction, 1000);
    }

    if ((endTest || pauseTest) && intervalId) {
      if (charTypedCount.current > 0 || correctCharTypedCount.current > 0) {
        intervalFunction();
      }
      clearInterval(intervalId);
      intervalId = null;
    }

    return () => {
      if (intervalId) {
        if (charTypedCount.current > 0 || correctCharTypedCount.current > 0) {
          intervalFunction();
        }
        clearInterval(intervalId);
      }
    };
  }, [addEachSecondWordTyped, dispatch, startTest, endTest, pauseTest]);

  useEffect(() => {
    inputValue.current = "";
  }, [resetTrigger]);

  return (
    <input
      type="text"
      ref={inputRef}
      id="main-user-typing-cursor"
      value={inputValue.current}
      disabled={endTest || isModalOpen}
      className="  absolute inset-0 outline-none border-none bg-transparent -z-10 appearance-none text-transparent user-select-none "
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === "Backspace") {
          if (inputValue.current === "" && wordIndex - 1 >= 0) {
            inputValue.current = wordArr[wordIndex - 1].typedWord + " ";
            dispatch(changeWordIndex(wordIndex - 1));
          }
          console.log("Ctrl+Backspace pressed");
        } else if (e.key === "Backspace") {
          if (inputValue.current === "" && wordIndex - 1 >= 0) {
            inputValue.current = wordArr[wordIndex - 1].typedWord + " ";
            dispatch(changeWordIndex(wordIndex - 1));
          }
          // console.log("Backspace pressed");
        } else if (e.key === "Escape") {
          console.log("escape entered from here");

          setIsModalOpen(true);
          handleBlur();
        } else if (
          e.key === "Enter" ||
          // e.key === "Tab" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowDown" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          (e.ctrlKey && e.key === "a")
        ) {
          e.preventDefault();
        }
        // console.log(e.key);
      }}
      onInput={(e: React.FormEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement;

        const keyInput = (e.nativeEvent as InputEvent).data;

        if (keyInput === " ") {
          if (inputElement.value !== " ") {
            inputElement.value = "";
            if (startTest && wordIndex === wordArr.length - 1) {
              endTestMethod();
              console.log("The test has ended");
            } else if (pauseTest !== false) {
              startTestMethod();
            }
            increaseTotalCorrectCharTyped();
            increaseTotalCharTyped();
            dispatch(changeWordIndex(wordIndex + 1));
            dispatch(changeLetterIndex(0));

            addWordTimeStamp({ index: wordIndex, timeStamp: Date.now() });
          } else {
            inputElement.value = "";
          }
        } else {
          if (
            wordIndex === 0 &&
            letterIndex === 0 &&
            keyInput !== null &&
            !startTest
          ) {
            startTestMethod();
          } else if (pauseTest !== false) {
            startTestMethod();
          }
          checkForError(wordIndex, inputElement, keyInput !== null, keyInput);
        }

        inputValue.current = inputElement.value;
      }}
      onFocus={() => {
        handleFocus();
      }}
      onBlur={() => {
        handleTestPauseWhenBlurred();
        handleBlur();
      }}
      autoComplete="off"
      spellCheck="false"
      autoCapitalize="false"
    />
  );
};

export default TypingParagraphInputBox;
