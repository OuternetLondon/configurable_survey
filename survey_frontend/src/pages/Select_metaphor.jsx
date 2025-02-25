import Loop_JSON from "../survey_components/loop_JSON";
import "../index.css";
import { useState } from "react";

function Select_metaphor({
  JSON_data,
  setSelectedValue,
  setCurrentQuestion,
  clickedButton,
  setClickedButton,
}) {
  const questionList = JSON_data.questionList;
  let questionOneStyle = JSON_data.questionOne;

  function clickButton(answer) {
    setClickedButton(answer);

    setTimeout(() => {
      setSelectedValue(answer);
      setClickedButton("");
      setCurrentQuestion("questionTwo");
    }, 1500);

    console.log(answer);
  }

  function submit() {
    setCurrentQuestion("questionTwo");
    setClickedButton("");
  }

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO_2.png",
    "SNOW DROP": "/images/FLOWER_HERO.png",
    CLOUDS: "/images/CLOUD_HERO.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_HERO.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  const imageStyles = {
    CLOUDS: {
      position: "absolute",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "150px",
      width: "300px",
      top: "13%",
      left: "35%",
      transform: `translateX(-50%)`,
    },
    HUMMINGBIRD: {
      position: "absolute",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "170px",
      width: "250px",
      top: "11%",
      right: "20%",
      transform: `translateX(-50%)`,
    },

    "SNOW DROP": {
      position: "absolute",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "110px",
      width: "290px",
      bottom: "38%",
      right: "7%",
      transform: `translateX(-50%)`,
    },

    RACOON: {
      position: "absolute",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "170px",
      width: "180px",
      bottom: "38%",
      left: "25%",
      transform: `translateX(-50%)`,
    },
    CHIPMUNK: {
      position: "absolute",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "170px",
      width: "250px",
      bottom: "20%",
      left: "50%",
      transform: `translateX(-50%)`,
    },
  };

  return (
    <>
      <div
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
          {questionList["questionOne"].question}
        </p>
        {questionList["questionOne"].answers.map((answer) => (
          <div
            key={answer}
            style={{
              backgroundImage: imageMap[answer]
                ? `url(${imageMap[answer]})`
                : undefined,
              ...imageStyles[answer],
              ...(clickedButton === answer
                ? {
                    transform: "scale(1.5) translate(-30%, -10%)",
                    opacity: 0.85,
                  }
                : {}),
              transition: "transform 0.5s ease-in-out",
            }}
            onClick={() => clickButton(answer)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Select_metaphor;
