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
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });
  let questionOneStyle = Loop_JSON({ JSON: JSON_data.questionOne });
  let questionTwoStyle = Loop_JSON({ JSON: JSON_data.questionTwo });
  let buttonGroupStyle = Loop_JSON({ JSON: JSON_data.q2_buttonGroup });
  let buttonStyle = Loop_JSON({ JSON: JSON_data.q2_button });
  let buttonClick = Loop_JSON({ JSON: JSON_data.q2_button.selectedStyle });
  let buttonTextStyle = Loop_JSON({ JSON: JSON_data.q2_button.text });
  let confirmButtonStyle = Loop_JSON({ JSON: JSON_data.confirmButton });
  let confirmText = Loop_JSON({ JSON: JSON_data.confirmButton.text });

  function clickButton(answer) {
    setClickedButton(answer);

    setTimeout(() => {
      setClickedButton("");
      submitResponse();
    }, 1500);
  }
  return (
    <>
      <Flex
        {...flexStyles}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        width="100%"
      >
        <Text {...questionTwoStyle}>
          {questionList[selectedValue].question}
        </Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundImage: "url(/images/RACCOON_HERO.png)",
              position: "absolute",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "170px",
              width: "180px",
            }}
          ></div>
          <Flex {...buttonGroupStyle}>
            {questionList[selectedValue].answers.map((answer) => (
              <Button
                key={answer}
                style={{
                  background: "transparent",
                  backdropFilter: "blur(20px)",
                  ...(clickedButton === answer
                    ? {
                        transform: "scale(1.2)",
                        opacity: 0.85,
                        transition:
                          "transform 0.5s ease-in-out, color 0.5s ease-in-out",
                        backgroundColor: "#80fcac",
                      }
                    : {}),
                }}
                {...(clickedButton === answer ? buttonClick : buttonStyle)}
                onClick={() => clickButton(answer)}
              >
                <Text {...buttonTextStyle}>{answer}</Text>
              </Button>
            ))}
          </Flex>
          <p>image</p>
        </div>

        <Button {...confirmButtonStyle} visibility="hidden">
          <Text {...confirmText}>Confirm</Text>
        </Button>
      </Flex>
    </>
  );
}

export default Question_page;
