import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoPauseCircle, IoRefreshCircle, IoCheckmarkCircle, IoPlayCircle } from "react-icons/io5";
import QuestionCard from "@/components/Cards/QuestionCard";
import TimerClock from "@/components/Timer/TimerClock";
import TimerSlider from "@/components/Timer/TimerSlider";
import TimeModal from "@/components/Modals/TimeModal";
import { Container } from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import QuestionGroups from "@/data/QuestionGroup.json";


const TimerPage = () => {
  const router = useRouter();
  const questionId = router.query.id;
  const progressId = router.query.progressId;
  const questionData = QuestionGroups.find((item) => item.id === Number(questionId));

  const [initialMinutes, setInitialMinutes] = useState(30); // the minutes that user set
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60); // counting down the second
  const [spentMinutes, setSpentMinutes] = useState(0); // total minutes that user spend
  const [isPaused, setIsPaused] = useState(true);
  const [reset, setReset] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const [showTimeUpModal, setShowTimeUpModal] = useState(false);

  const startTimer = () => {
    const newIntervalId = setInterval(() => {
      setSecondsLeft((prevSecondsLeft) => {
        if (prevSecondsLeft > 0) {
          return prevSecondsLeft - 1; // run the timer if secondsLeft >0
        } else {
          // if secondsLeft <=0
          clearInterval(newIntervalId);
          setIsPaused(true);
          setShowTimeUpModal(true);
          return prevSecondsLeft;
        }
      });
    }, 1000);
    setIntervalId(newIntervalId);
    setIsPaused(false);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsPaused(true);
  };

  const updateSpentMinutes = () => {
    const extraMinutes = Math.ceil(initialMinutes - secondsLeft / 60);
    setSpentMinutes(spentMinutes + extraMinutes); // add the spend minutes
  };

  const handlePause = () => {
    if (isPaused) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  const handleReset = () => {
    setIsPaused(true);
    setSecondsLeft(initialMinutes * 60);
    setReset(false);
  };

  const handleClose = () => {
    setShowTimeUpModal(false); // close the modal
    handleReset(); // reset the timer
  };

  const handleComplete = () => {
    stopTimer();
    updateSpentMinutes();
    setShowTimeUpModal(true);
  };

  const sliderChangeHandler = (value) => {
    setInitialMinutes(value);
    setSecondsLeft(value * 60);
  };

  return (
    <Container>
      <Heading heading="Timer" subheading="Try to finish the question within the suggested time" />

      <div className="lg:flex justify-center items-center space-x-20">
        <div className="flex-1 max-w-xl">
          <TimerClock secondsLeft={secondsLeft} initialMinutes={initialMinutes} />

          {spentMinutes !== 0 && <div>You have spent {spentMinutes} mins</div>}
          <TimerSlider value={initialMinutes} onChange={sliderChangeHandler} disabled={!isPaused} />

          {/* button */}
          <div className="flex space-x-5 justify-center ">
            <IoRefreshCircle
              className="cursor-pointer w-14 h-14"
              onClick={handleReset}
              disabled={!isPaused}
            />
            {isPaused ? (
              <IoPlayCircle className="cursor-pointer w-14 h-14" onClick={handlePause} />
            ) : (
              <IoPauseCircle className="cursor-pointer w-14 h-14" onClick={handlePause} />
            )}
            <IoCheckmarkCircle className="cursor-pointer w-14 h-14" onClick={handleComplete} />
          </div>
        </div>
        <div className="flex-2 max-w-md">
          <QuestionCard data={questionData} />
        </div>
      </div>
      {/* Modals */}
      <TimeModal
        open={showTimeUpModal}
        handleClose={handleClose}
        questionId={questionId}
        progressId={progressId}
        spentMinutes={spentMinutes}
      />
    </Container>
  );
};

export default TimerPage;
