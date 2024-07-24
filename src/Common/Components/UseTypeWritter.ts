import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  speed?: number;
}

const useTypewriter = ({ words, speed = 100 }: TypewriterOptions) => {
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      const currentText = currentWord.substring(0, currentLetterIndex);
      setText(currentText);

      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
        setTimeout(() => {
          setCurrentLetterIndex(currentLetterIndex - 1);
        }, speed * 2);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setTimeout(() => {
          setCurrentLetterIndex(currentLetterIndex + 1);
        }, speed);
      } else if (isDeleting) {
        setCurrentLetterIndex(currentLetterIndex - 1);
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, currentWordIndex, isDeleting, speed, words]);

  return text;
};

export default useTypewriter;
