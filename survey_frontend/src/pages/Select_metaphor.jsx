import Loop_JSON from "../survey_components/loop_JSON";
import "../index.css";
import { useState } from "react";

function Select_metaphor({
  JSON_data,
  setSelectedValue,
  setCurrentQuestion,
  clickedButton,
  setClickedButton,
  nodeRefOne,
}) {
  const questionList = JSON_data.questionList;

  function clickButton(answer) {
    setClickedButton(answer);
    setTimeout(() => {
      setCurrentQuestion("transition");
      setTimeout(() => {
        setSelectedValue(answer);
        setCurrentQuestion("questionTwo");
      }, 351);
    }, 200);
  }

  function submit() {
    setCurrentQuestion("questionTwo");
    setClickedButton("");
  }

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO.png",
    "SNOW DROP": "/images/FLOWER_HERO_UPDATED.png",
    CLOUDS: "/images/CLOUD.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_HERO_TEST2.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  const imageStyles = {
    CLOUDS: {
      height: "20vw",
      width: "20vw",
      top: "6%",
      left: "35%",
    },
    HUMMINGBIRD: {
      height: "19vw",
      width: "19vw",
      top: "7%",
      right: "16.5%",
    },

    "SNOW DROP": {
      height: "19vw",
      width: "19vw",
      bottom: "30%",
      right: "5%",
    },

    RACOON: {
      height: "17vw",
      width: "17vw",
      bottom: "34%",
      left: "24%",
    },
    CHIPMUNK: {
      height: "17vw",
      width: "17vw",
      bottom: "18%",
      left: "50%",
    },
  };

  return (
    <>
      <div ref={nodeRefOne} className="metaphor_container">
        <p className="metaphor_text">{questionList["questionOne"]?.question}</p>
        {questionList["questionOne"]?.answers.map((answer) => (
          <div
            key={answer}
            className="metaphor_images"
            style={{
              backgroundImage: imageMap[answer]
                ? `url(${imageMap[answer]})`
                : undefined,
              ...imageStyles[answer],
              ...(clickedButton === answer
                ? {
                    transform: "scale(1.25) translate(-40%, -0%)",
                    opacity: 0.85,
                  }
                : {}),
            }}
            onClick={() => clickButton(answer)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Select_metaphor;
