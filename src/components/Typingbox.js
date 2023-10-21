import React, { useEffect, useState } from "react";

const Typingbox = () => {
  const [timer, setTimer] = useState(15);
  const [wordCount, setWordCount] = useState(50); // Initialize word count to 50
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  let para =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor sed justo laoreet venenatis. Cras ut facilisis turpis. Vivamus in fermentum quam, sed malesuada nunc. Aliquam eu erat non libero sollicitudin semper. Nulla at aliquet justo. Aenean ac nunc id quam vestibulum dignissim. In hac habitasse platea dictumst. Vestibulum volutpat, ex sit amet vestibulum dignissim, arcu justo tincidunt nisi, eu vestibulum sapien risus ut lorem. Sed eget purus sit amet neque dapibus vestibulum. Praesent a diam arcu. Vestibulum interdum leo nec massa vehicula, at elementum ligula volutpat. Sed a volutpat felis. Suspendisse in hendrerit lectus. Curabitur convallis eget ante a fermentum";

  let keychar = 0;

  // Function to update the word count
  const updateWordCount = (count) => {
    setWordCount(count);
  };

  // Split the paragraph into words
  const words = para.split(" ");

  useEffect(() => {
    // Start the timer when isTimerRunning becomes true
    let intervalId;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        if (timer === 1) {
          window.alert("Times up!");
          setIsTimerRunning(false);
          clearInterval(intervalId);
        }
      }, 1000);
    } else {
      // Clear the timer if isTimerRunning becomes false
      clearInterval(intervalId);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning, timer]);

  const startTimer = (seconds) => {
    setTimer(seconds);
    setIsTimerRunning(true);
  };
  
  const handleKeyDown = () => {
    // Start the timer when a key is pressed
    if (!isTimerRunning) {
      startTimer(timer); // Adjust the initial time as needed
    }
  };

  return (
    <div>
      <div className="row-1">
        <div>{timer}</div>
        <div>
          <button onClick={() => startTimer(15)}>15sec</button>
          <button onClick={() => startTimer(30)}>30sec</button>
          <button onClick={() => startTimer(60)}>60sec</button>
        </div>
      </div>
      <div className="typingbox" onKeyDown={handleKeyDown} tabIndex={0}>
        {/* {para.split("").map((char) => (
          <span key={`char` + keychar++}>{char}</span>
        ))} */}
        {words.slice(0, wordCount).map((word) => (
          <span key={`word` + keychar++}>{word} </span>
        ))}
      </div>
      <div className="wordChangeSection">
        <div className="btn1">
          <button onClick={() => updateWordCount(10)}>10</button>
          <button onClick={() => updateWordCount(50)}>50</button>
          <button onClick={() => updateWordCount(80)}>80</button>
          <button onClick={() => updateWordCount(100)}>100</button>
          <span>- no.words</span>
        </div>
      </div>
    </div>
  );
};

export default Typingbox;
