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
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import Loop_components from "@/survey_components/loop_components";
import { FaFontAwesome } from "react-icons/fa";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "@/survey_components/restart_symbol";
//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

function Question_page({
  JSON_data,
  currentQuestion,
  selectedValue,
  setCurrentQuestion,
  submitResponse,
  clickedButton,
  setClickedButton,
}) {
  const questionList = JSON_data.questionList;
  let flexStyles = JSON_data.mainContainer;
  let questionTwoStyle = JSON_data.questionTwo;
  let buttonGroupStyle = JSON_data.q2_buttonGroup;
  let buttonStyle = JSON_data.q2_button;
  let buttonClick = JSON_data.q2_button.selectedStyle;
  let buttonTextStyle = JSON_data.q2_button.text;

  function clickButton(answer) {
    setClickedButton(answer);

    setTimeout(() => {
      setClickedButton("");
      submitResponse();
    }, 1500);
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
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "150px",
      width: "300px",
    },
    HUMMINGBIRD: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "170px",
      width: "250px",
    },

    "SNOW DROP": {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "110px",
      width: "290px",
    },

    RACOON: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "190px",
      width: "200px",
    },
    CHIPMUNK: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "170px",
      width: "250px",
    },
  };

  let largeStyle = {};
  questionList[selectedValue].answers.forEach((answer) => {
    if (answer.length >= 13) {
      largeStyle = {
        padding: "12px 40px",
        lineHeight: "1.2",
      };
    }
  });

  return (
    <>
      <div
        style={{
          ...flexStyles,
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ ...questionTwoStyle }}>
          {questionList[selectedValue].question}
        </p>
        <div
          /*  style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}*/
          style={{
            display: "grid",
            //gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",

            gridTemplateRows: "1fr ",
            width: "100%",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${imageMap[selectedValue]})`,
              ...imageStyles[selectedValue],
            }}
          ></div>
          <div style={{ ...buttonGroupStyle }}>
            {questionList[selectedValue].answers.map((answer) => (
              <button
                key={answer}
                style={{
                  //maxWidth: "100%",
                  //maxWidth: "470px",
                  // minWidth: "430px",
                  //minWidth: "80%",
                  /* whiteSpace: "normal",
                  wordWrap: "break-word",
                  textAlign: "center",*/

                  /* ...(clickedButton === answer
                    ? {
                        maxWidth: "500px",
                        minWidth: "400px",
                        transform: "scale(1.2)",
                        opacity: 0.85,
                        transition: "transform 0.5s ease-in-out",
                        backgroundColor: "#9AF7B4",
                        color: "#1B392F",
                      }
                    : {}),*/

                  ...(clickedButton === answer ? buttonClick : buttonStyle),
                  ...largeStyle,
                }}
                onClick={() => clickButton(answer)}
              >
                <p
                  style={{
                    ...buttonTextStyle,
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  {answer}
                </p>
              </button>
            ))}
          </div>
          <div
            style={{
              backgroundImage: "url(/images/CAR_HERO.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "210px",
              width: "420px",
              marginTop: "60px",
              marginLeft: "50px",
              //  marginLeft: "70px",
            }}
          ></div>
        </div>

        <Button visibility="hidden">
          <Text>Confirm</Text>
        </Button>
      </div>
    </>
  );
}

export default Question_page;
