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

//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

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
    setSelectedValue(answer);
    console.log(answer);
  }

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK.png",
    "SNOW DROP": "/images/FLOWER_HERO.png",
    CLOUDS: "/images/CLOUD_HERO.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_02.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  return (
    <>
      <Flex {...flexStyles}>
        <Text {...questionOneStyle}>
          {questionList["questionOne"].question}
        </Text>
        <Flex {...buttonGroupStyle}>
          {questionList["questionOne"].answers.map((answer) => (
            <Button
              key={answer}
              {...(clickedButton === answer ? buttonClick : buttonStyle)}
              style={{
                backgroundImage: imageMap[answer]
                  ? `url(${imageMap[answer]})`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => clickButton(answer)}
            ></Button>
          ))}
        </Flex>

        {clickedButton ? (
          <Button
            {...confirmButtonStyle}
            onClick={() => setCurrentQuestion("questionTwo")}
          >
            <Text {...confirmText}>Confirm</Text>
          </Button>
        ) : (
          <Button {...confirmButtonStyle} visibility="hidden">
            <Text {...confirmText}>Confirm</Text>
          </Button>
        )}
      </Flex>
    </>
  );
}

export default Select_metaphor;
