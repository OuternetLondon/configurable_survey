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

function Final({ JSON_data, selectedValue }) {
  const questionList = JSON_data.questionList;
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });
  let questionOneStyle = Loop_JSON({ JSON: JSON_data.questionOne });
  let questionTwoStyle = Loop_JSON({ JSON: JSON_data.questionTwo });
  //let buttonGroupStyle = Loop_JSON({ JSON: JSON_data.buttonGroup });

  let confirmButtonStyle = Loop_JSON({ JSON: JSON_data.confirmButton });
  let confirmText = Loop_JSON({ JSON: JSON_data.confirmButton.text });

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO.png",
    "SNOW DROP": "/images/FLOWER_HERO.png",
    CLOUDS: "/images/CLOUD_HERO.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_02.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  const styleMap = {
    CHIPMUNK: { height: "45%", width: "650px" },
    "SNOW DROP": { height: "500px", width: "390px", left: "5%", bottom: "5%" },
    CLOUDS: { height: "400px", width: "100%", left: "0%", top: "5%" },
    HUMMINGBIRD: { height: "500px", width: "700px", bottom: "0%" },
    RACOON: { height: "400px", width: "400px" },
  };
  return (
    <>
      <Flex {...flexStyles}>
        <Text {...questionOneStyle} fontSize="95px">
          {questionList["FINAL"].question}
        </Text>
        <div
          style={{
            position: "absolute",
            left: "2%",
            bottom: "5%",
            backgroundImage: `url(${imageMap[selectedValue]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            ...styleMap[selectedValue],
          }}
        ></div>
      </Flex>
    </>
  );
}

export default Final;
