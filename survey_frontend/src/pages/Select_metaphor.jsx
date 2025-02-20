import {
  Button,
  HStack,
  VStack,
  Stack,
  Input,
  ButtonGroup,
  Center,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import Loop_JSON from "@/survey_components/loop_JSON";
import "../index.css";
import { useState } from "react";
import Loop_components from "@/survey_components/loop_components";

function Select_metaphor({
  JSON_data,
  setSelectedValue,
  setCurrentQuestion,
  clickedButton,
  setClickedButton,
}) {
  const questionList = JSON_data.questionList;
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });
  let questionOneStyle = Loop_JSON({ JSON: JSON_data.questionOne });
  let buttonGroupStyle = Loop_JSON({ JSON: JSON_data.q1_buttonGroup });
  let buttonStyle = Loop_JSON({ JSON: JSON_data.q1_button });
  let buttonClick = Loop_JSON({ JSON: JSON_data.q1_button.selectedStyle });
  let buttonTextStyle = Loop_JSON({ JSON: JSON_data.q1_button.text });
  let confirmButtonStyle = Loop_JSON({ JSON: JSON_data.confirmButton });
  let confirmText = Loop_JSON({ JSON: JSON_data.confirmButton.text });

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
        <Text {...questionOneStyle} mb={28}>
          {questionList["questionOne"].question}
        </Text>
        {questionList["questionOne"].answers.map((answer) => (
          <div
            key={answer}
            {...(clickedButton === answer ? buttonClick : buttonStyle)}
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
