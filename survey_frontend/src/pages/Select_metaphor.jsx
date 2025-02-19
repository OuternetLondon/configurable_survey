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
    setSelectedValue(answer);
    console.log(answer);
  }

  function submit() {
    setCurrentQuestion("questionTwo");
    setClickedButton("");
  }

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK.png",
    "SNOW DROP": "/images/FLOWER_HERO.png",
    CLOUDS: "/images/CLOUD_HERO_2.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_02.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  const imageStyles = {
    CHIPMUNK: { backgroundSize: "cover", backgroundPosition: "center" },
    "SNOW DROP": { backgroundSize: "180%", backgroundPosition: "110% -5%" },
    CLOUDS: { backgroundSize: "400%", backgroundPosition: "25% 50%" },
    HUMMINGBIRD: { backgroundSize: "cover", backgroundPosition: "center" },
    RACOON: { backgroundSize: "cover", backgroundPosition: "center" },
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
                ...imageStyles[answer],
              }}
              onClick={() => clickButton(answer)}
            ></Button>
          ))}
        </Flex>

        {clickedButton ? (
          <Button {...confirmButtonStyle} onClick={() => submit()}>
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
