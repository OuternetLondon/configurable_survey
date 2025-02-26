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
  let questionOneStyle = JSON_data.questionOne;

  function clickButton(answer) {
    setClickedButton(answer);
    setTimeout(() => {
      setCurrentQuestion("transition");
      setTimeout(() => {
        setSelectedValue(answer);
        //  setClickedButton("");
        setCurrentQuestion("questionTwo");
      }, 351);
    }, 200);

    console.log(answer);
  }

  function submit() {
    setCurrentQuestion("questionTwo");
    setClickedButton("");
  }

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO.png",
    "SNOW DROP": "/images/FLOWER_HERO_WITH_SNOW.png",
    CLOUDS: "/images/CLOUD.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_HERO.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  const imageStyles = {
    CLOUDS: {
      position: "absolute",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "17vw",
      width: "17vw",
      top: "8%",
      left: "35%",
      transform: `translateX(-50%)`,
    },
    HUMMINGBIRD: {
      position: "absolute",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "17vw",
      width: "17vw",
      top: "10%",
      right: "20%",
      transform: `translateX(-50%)`,
    },

    "SNOW DROP": {
      position: "absolute",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "17vw",
      width: "17vw",
      bottom: "34%",
      right: "7%",
      transform: `translateX(-50%)`,
    },

    RACOON: {
      position: "absolute",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "17vw",
      width: "17vw",
      bottom: "33%",
      left: "25%",
      transform: `translateX(-50%)`,
    },
    CHIPMUNK: {
      position: "absolute",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "17vw",
      width: "17vw",
      bottom: "20%",
      left: "50%",
      transform: `translateX(-50%)`,
    },
  };

  return (
    <>
      <div
        ref={nodeRefOne}
        style={{
          position: "relative",
          width: `100%`,
          height: `100%`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <p style={{ ...questionOneStyle }}>
          {questionList["questionOne"]?.question}
        </p>
        {questionList["questionOne"]?.answers.map((answer) => (
          <div
            key={answer}
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
              transition: "transform 0.3s ease-out",
            }}
            onClick={() => clickButton(answer)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Select_metaphor;
