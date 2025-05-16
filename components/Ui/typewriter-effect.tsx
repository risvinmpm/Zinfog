import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  typingSpeed = 100, // Speed of typing in ms
  loopDelay = 1000, // Delay before looping back to the first word
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  loopDelay?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const currentWord = words[currentWordIndex]?.text || "";

  useEffect(() => {
    if (typedText.length === currentWord.length) {
      // Wait for a moment before starting to type the next word
      const loopTimeout = setTimeout(() => {
        setTypedText(""); // Clear the typed text
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
      }, loopDelay);
      return () => clearTimeout(loopTimeout);
    }

    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + currentWord[typedText.length]);
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [typedText, currentWord, words.length, loopDelay, typingSpeed]);

  return (
    <div className={cn("text-base font-bold text-center", className)}>
      <motion.div className="inline">
        <div className="inline-block">
          {typedText.split("").map((char, index) => (
            <motion.span
              key={index}
              className={cn("dark:text-white text-white font-light text-sm")}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block", cursorClassName)}
      ></motion.span>
    </div>
  );
};
