import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TimerClock({ secondsLeft, initialMinutes }) {
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = Math.floor(secondsLeft % 60);
  let percentage = Math.round((secondsLeft / (initialMinutes * 60)) * 100);

  return (
    <div className="flex">
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#000",
          textSize: "16px",

          pathColor: "#f54e4e",
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
    </div>
  );
}

export default TimerClock;
